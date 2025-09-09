import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { glob } from 'tinyglobby';
import * as tsMorph from 'ts-morph';
import { Parser } from './parser';
import { kebabToPascal } from './string-utils';
import { frameworks } from './framework';
import { MONOREPO_ROOT, CLASSES_DIRECTORY, OUTPUT_DIRECTORY } from './constants';

async function getPartOrderFromAnatomy(framework: string, component: string) {
	const project = new tsMorph.Project({ useInMemoryFileSystem: true });
	const sourceFile = project.createSourceFile(
		`anatomy.js`,
		await readFile(
			join(MONOREPO_ROOT, 'packages', `skeleton-${framework}`, 'dist', 'components', component, 'modules', `anatomy.js`),
			'utf-8'
		)
	);
	const anatomy = sourceFile.getFirstDescendantByKindOrThrow(tsMorph.SyntaxKind.ObjectLiteralExpression);
	return [
		`${kebabToPascal(component)}Root`,
		...anatomy
			.getProperties()
			.filter(tsMorph.Node.isPropertyAssignment)
			.map((p) => {
				const name = p.getName();
				if (name === 'Context') {
					return `${kebabToPascal(component)}RootContext`;
				}
				return `${kebabToPascal(component)}${name}`;
			})
	];
}

async function getClassValue(component: string, part: string) {
	const project = new tsMorph.Project({ useInMemoryFileSystem: true });
	const sourceFile = project.createSourceFile(`${component}.ts`, await readFile(join(CLASSES_DIRECTORY, `${component}.ts`), 'utf-8'));
	const classes = sourceFile.getFirstDescendantByKindOrThrow(tsMorph.SyntaxKind.ObjectLiteralExpression);
	const property = classes
		.getProperties()
		.filter(tsMorph.Node.isPropertyAssignment)
		.find((p) => p.getName() === part.replace(`${component}-`, '').toLowerCase());
	if (!property) {
		return;
	}
	return property.getInitializerOrThrow().getText().replaceAll("'", '"');
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
	for (const framework of frameworks) {
		await rm(join(OUTPUT_DIRECTORY, framework.name), { recursive: true, force: true });
		await mkdir(join(OUTPUT_DIRECTORY, framework.name), { recursive: true });

		const paths = await glob(`**/anatomy/*.d.ts`, {
			cwd: join(MONOREPO_ROOT, 'packages', `skeleton-${framework.name}`, 'dist', 'components'),
			absolute: true
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
			{} as Record<string, string[]>
		);

		const parser = new Parser(framework);

		for (const [component, parts] of Object.entries(components)) {
			const partOrder = await getPartOrderFromAnatomy(framework.name, component);

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
								classValue: classValue
							}
						};
					})
				)
			).toSorted((a, b) => {
				const aName = a.name.replace(/Props$/, '');
				const bName = b.name.replace(/Props$/, '');
				return partOrder.indexOf(aName) - partOrder.indexOf(bName);
			});

			const result = JSON.stringify(
				{
					name: component,
					types: types
				},
				null,
				4
			);

			const outputPath = join(OUTPUT_DIRECTORY, framework.name, `${component}.json`);

			await writeFile(outputPath, result, 'utf-8');
		}
	}
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
