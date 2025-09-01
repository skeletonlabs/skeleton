import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { glob } from 'tinyglobby';
import * as tsMorph from 'ts-morph';

const SKELETON_DEV_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MONOREPO_ROOT = join(dirname(SKELETON_DEV_ROOT), '..');
const OUTPUT_DIRECTORY = join(SKELETON_DEV_ROOT, 'src', 'content', 'types');
const CLASSES_DIRECTORY = join(MONOREPO_ROOT, 'packages', 'skeleton-common', 'dist', 'classes');

type TypeKind = 'function' | 'array' | 'object' | 'primitive';

interface Property {
	name: string;
	type: string;
	typeKind: TypeKind;
	optional: boolean;
	JSDoc: JSDoc;
}

interface JSDoc {
	description: string | null;
	tags: Tag[];
}

interface Tag {
	name: string;
	value: string | null;
}

interface Interface {
	name: string;
	properties: Property[];
}

class SourceFile {
	constructor(
		private framework: (typeof frameworks)[number],
		private sourceFile: tsMorph.SourceFile
	) {}

	private isFunctionType(type: tsMorph.Type) {
		return type.getCallSignatures().length > 0 || type.getUnionTypes().some((t) => t.getCallSignatures().length > 0);
	}

	private isArrayType(type: tsMorph.Type) {
		return type.isArray() || type.getUnionTypes().some((t) => t.isArray());
	}

	private isObjectType(type: tsMorph.Type) {
		return type.isObject() || type.getUnionTypes().some((t) => t.isObject());
	}

	private getTypeKind(symbol: tsMorph.Symbol): TypeKind {
		const type = symbol.getTypeAtLocation(this.sourceFile);
		if (this.isFunctionType(type)) return 'function';
		if (this.isArrayType(type)) return 'array';
		if (this.isObjectType(type)) return 'object';
		return 'primitive';
	}

	private getDocumentation(symbol: tsMorph.Symbol): JSDoc {
		const jsDoc = symbol
			.getDeclarations()
			.filter((decl) => tsMorph.Node.isJSDocable(decl))
			.flatMap((decl) => decl.getJsDocs())
			.at(0);

		if (!jsDoc) return { description: null, tags: [] };

		return {
			description: jsDoc.getDescription().trim(),
			tags: jsDoc.getTags().map((tag) => ({ name: tag.getTagName(), value: tag.getCommentText() ?? null }))
		};
	}

	public getProperty(symbol: tsMorph.Symbol): Property {
		const type = symbol.getTypeAtLocation(this.sourceFile);
		return {
			name: symbol.getName(),
			type: type.getText(undefined, tsMorph.ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope),
			typeKind: this.getTypeKind(symbol),
			optional: symbol.isOptional(),
			JSDoc: this.getDocumentation(symbol)
		};
	}

	public getInterface(name: string): Interface {
		const interface_ = this.sourceFile.getInterface(name);
		if (!interface_) throw new Error(`Interface not found: ${name}`);

		interface_.getExtends().forEach((ext) => {
			if (this.framework.config.extendsBlacklist.some((pattern) => pattern.test(ext.getText()))) {
				interface_.removeExtends(ext);
			}
		});

		return {
			name: interface_.getName(),
			properties: interface_
				.getType()
				.getProperties()
				.map((symbol) => this.getProperty(symbol))
		};
	}
}

class Parser {
	private project: tsMorph.Project;

	constructor(private framework: (typeof frameworks)[number]) {
		this.project = new tsMorph.Project({
			skipAddingFilesFromTsConfig: true,
			tsConfigFilePath: join(MONOREPO_ROOT, 'packages', `skeleton-${framework.name}`, 'tsconfig.json')
		});

		this.project.addSourceFilesAtPaths(
			join(MONOREPO_ROOT, 'packages', `skeleton-${framework.name}`, 'dist', 'components/*/anatomy/*.d.ts')
		);
	}

	public getSourceFile(path: string): SourceFile {
		const sourceFile = this.project.getSourceFile(path);
		if (!sourceFile) throw new Error(`Source file not found: ${path}`);
		return new SourceFile(this.framework, sourceFile);
	}
}

function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function kebabToPascal(str: string) {
	return str.split('-').map(capitalize).join('');
}

function pascalToKebab(str: string) {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

const frameworks = [
	{
		name: 'svelte',
		config: {
			classPropertyName: 'class',
			declarationExtension: '.svelte.d.ts',
			extendsBlacklist: [/^HTML.*Attributes(?:<.*>)?$/, /^Omit<\s*HTML.*Attributes.*>$/] as RegExp[]
		}
	},
	{
		name: 'react',
		config: {
			classPropertyName: 'className',
			declarationExtension: '.d.ts',
			extendsBlacklist: [/^ComponentProps(?:<.*>)?$/, /^Omit<\s*ComponentProps.*>$/] as RegExp[]
		}
	}
] as const;

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
	const order = [
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
	project.removeSourceFile(sourceFile);
	return order;
}

async function getClassValue(component: string, part: string) {
	const { [`classes${kebabToPascal(component)}`]: classes } = await import(
		pathToFileURL(join(CLASSES_DIRECTORY, `${component}.js`)).toString()
	);

	const key = part
		.replace(new RegExp(`^${kebabToPascal(component).charAt(0).toUpperCase() + kebabToPascal(component).slice(1)}`), '')
		.replace(/^./, (c) => c.toLowerCase());

	return Object.hasOwn(classes, key) ? classes[key] : undefined;
}

async function getComponentEntries(framework: (typeof frameworks)[number], parser: Parser, components: Record<string, string[]>) {
	const entries = [];

	for (const [component, files] of Object.entries(components)) {
		const order = await getPartOrderFromAnatomy(framework.name, component);
		const filesInOrder = order.flatMap((name) =>
			files.filter((f) => f.toLowerCase().endsWith(pascalToKebab(name) + framework.config.declarationExtension))
		);
		console.log({
			files,
			filesInOrder,
			order
		});
		const contentObj = Object.assign(
			{},
			...(await Promise.all(
				filesInOrder.map(async (file) => {
					const sourceFile = parser.getSourceFile(file);
					const part = kebabToPascal(basename(file).replace(framework.config.declarationExtension, ''));
					const _interface = sourceFile.getInterface(`${part}Props`);
					const classValue = await getClassValue(component, part);

					if (classValue) {
						_interface.properties.push({
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
