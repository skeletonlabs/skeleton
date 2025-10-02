// oxlint-disable-next-line no-unused-vars
import { MONOREPO_DIRECTORY, PACKAGE_DIRECTORY, SITE_DIRECTORY } from './constants';
import { Parser } from './parser';
import { kebabToCamel, kebabToPascal } from './string-utils';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { glob } from 'tinyglobby';
import * as tsMorph from 'ts-morph';

const ROOT_PARTS = ['Context', 'Provider'];

async function getPartOrderFromAnatomy(framework: string, component: string) {
	const project = new tsMorph.Project({ useInMemoryFileSystem: true });
	const sourceFile = project.createSourceFile(
		`anatomy.ts`,
		await readFile(join(PACKAGE_DIRECTORY(`skeleton-${framework}`), 'src', 'components', component, 'modules', `anatomy.ts`), 'utf-8'),
	);
	const order = [`${kebabToPascal(component)}Root`];
	const anatomy = sourceFile.getFirstDescendantByKind(tsMorph.SyntaxKind.ObjectLiteralExpression);
	if (anatomy) {
		order.push(
			...anatomy
				.getProperties()
				.filter(tsMorph.Node.isPropertyAssignment)
				.map((p) => {
					const name = p.getName();
					if (ROOT_PARTS.includes(name)) {
						return `${kebabToPascal(component)}Root${name}`;
					}
					return `${kebabToPascal(component)}${name}`;
				}),
		);
	}
	return order;
}

async function getClassValue(component: string, part: string) {
	try {
		const module = await import(pathToFileURL(join(PACKAGE_DIRECTORY('skeleton-common'), 'dist', 'classes', `${component}.js`)).href);
		const value = module[`classes${kebabToPascal(component)}`][kebabToCamel(part)];
		if (!value || typeof value !== 'string') {
			return;
		}
		return value
			.split(' ')
			.map((str) => str.replace('skb:', ''))
			.join(' ');
	} catch {}
}

function getComponentNameFromPath(path: string): string {
	const segments = path.split(/[\\/]/);
	const component = segments.at(-3);
	if (!component) {
		throw new Error(`Could not determine component from path: ${path}`);
	}
	return component;
}

function getComponentPartNameFromPath(path: string): string {
	const segments = path.split(/[\\/]/);
	const componentPart = segments.at(-1)?.split('.').at(0);
	if (!componentPart) {
		throw new Error(`Could not determine component part from path: ${path}`);
	}
	return componentPart;
}

async function main() {
	const OUTPUT_DIRECTORY = join(SITE_DIRECTORY('skeleton.dev'), 'src', 'content', 'types');

	for (const framework of ['svelte', 'react'] as const) {
		await rm(join(OUTPUT_DIRECTORY, framework), { recursive: true, force: true });
		await mkdir(join(OUTPUT_DIRECTORY, framework), { recursive: true });

		const paths = await glob(`**/anatomy/*.d.ts`, {
			cwd: join(PACKAGE_DIRECTORY(`skeleton-${framework}`), 'dist', 'components'),
			absolute: true,
		});

		const components = paths.reduce(
			(acc, path) => {
				const component = getComponentNameFromPath(path);
				if (!acc[component]) {
					acc[component] = [];
				}
				acc[component].push(path);
				return acc;
			},
			{} as Record<string, string[]>,
		);

		const parser = new Parser(framework);

		for (const [component, parts] of Object.entries(components)) {
			const partOrder = await getPartOrderFromAnatomy(framework, component);

			const types = (
				await Promise.all(
					parts.map(async (part) => {
						const sourceFile = parser.getSourceFile(part);
						const componentPartName = getComponentPartNameFromPath(part);
						const _interface = sourceFile.getInterface(`${kebabToPascal(component)}${kebabToPascal(componentPartName)}Props`);
						const classValue = await getClassValue(component, componentPartName);
						return {
							name: _interface.name,
							props: _interface.props,
							metadata: {
								classValue: classValue,
							},
						};
					}),
				)
			).toSorted((a, b) => {
				const aName = a.name.replace(/Props$/, '');
				const bName = b.name.replace(/Props$/, '');
				return partOrder.indexOf(aName) - partOrder.indexOf(bName);
			});

			const result = JSON.stringify(
				{
					name: component,
					types: types,
				},
				undefined,
				4,
			);

			const outputPath = join(OUTPUT_DIRECTORY, framework, `${component}.json`);

			await writeFile(outputPath, result, 'utf-8');
		}
	}
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
