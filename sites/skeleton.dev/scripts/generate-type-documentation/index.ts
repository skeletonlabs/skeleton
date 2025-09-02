import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import { glob } from 'tinyglobby';
import * as tsMorph from 'ts-morph';
import { Parser } from './parser';
import { kebabToPascal, capitalize, pascalToKebab } from './string-utils';
import { frameworks, type Framework } from './framework';
import { MONOREPO_ROOT, CLASSES_DIRECTORY, OUTPUT_DIRECTORY } from './constants';

async function getPartOrderFromAnatomy(framework: string, component: string) {
	const project = new tsMorph.Project({ useInMemoryFileSystem: true });
	const sourceFile = project.createSourceFile(
		`${component}-anatomy.js`,
		await readFile(
			join(MONOREPO_ROOT, 'packages', `skeleton-${framework}`, 'dist', 'components', component, 'modules', `${component}-anatomy.js`),
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
		.find((p) => p.getName() === part.replace(capitalize(component), '').toLowerCase());
	if (!property) {
		return;
	}
	return property.getInitializerOrThrow().getText().replaceAll("'", '"');
}

async function getComponentEntries(framework: Framework, parser: Parser, components: Record<string, string[]>) {
	const entries = [];
	for (const [component, files] of Object.entries(components)) {
		const order = await getPartOrderFromAnatomy(framework.name, component);
		const filesInOrder = order.flatMap((name) =>
			files.filter((f) => f.toLowerCase().endsWith(pascalToKebab(name) + framework.config.declarationExtension))
		);
		const contentObj = Object.assign(
			{},
			...(await Promise.all(
				filesInOrder.map(async (file) => {
					const sourceFile = parser.getSourceFile(file);
					const part = kebabToPascal(basename(file).replace(framework.config.declarationExtension, ''));
					const _interface = sourceFile.getInterface(`${part}Props`);
					const classValue = await getClassValue(component, part);

					if (classValue) {
						_interface.properties.unshift({
							name: framework.config.classPropertyName,
							type: 'string | undefined',
							typeKind: 'primitive',
							optional: true,
							JSDoc: {
								description: 'The base classes provided by Skeleton',
								tags: [{ name: 'default', value: classValue }]
							}
						});
					}

					return { [_interface.name]: _interface.properties };
				})
			))
		);

		entries.push({
			path: join(OUTPUT_DIRECTORY, framework.name, `${component}.json`),
			content: JSON.stringify(contentObj, null, 2)
		});
	}

	return entries;
}

async function main() {
	for (const framework of frameworks) {
		const componentFiles = await glob(`**/anatomy/*.d.ts`, {
			cwd: join(MONOREPO_ROOT, 'packages', `skeleton-${framework.name}`, 'dist', 'components'),
			absolute: true
		});

		const components = componentFiles.reduce(
			(acc, file) => {
				const parent = dirname(file).split(/[/\\]/).slice(-2, -1)[0];
				(acc[parent] = acc[parent] || []).push(file);
				return acc;
			},
			{} as Record<string, string[]>
		);

		const parser = new Parser(framework);
		const entries = await getComponentEntries(framework, parser, components);

		await rm(join(OUTPUT_DIRECTORY, framework.name), { recursive: true, force: true });
		await mkdir(join(OUTPUT_DIRECTORY, framework.name), { recursive: true });
		await Promise.all(entries.map((entry) => writeFile(entry.path, entry.content)));
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
