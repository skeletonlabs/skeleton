import { mkdir, rm, writeFile } from 'node:fs/promises';
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
	private framework: (typeof frameworks)[number];
	private sourceFile: tsMorph.SourceFile;

	constructor(framework: (typeof frameworks)[number], sourceFile: tsMorph.SourceFile) {
		this.framework = framework;
		this.sourceFile = sourceFile;
	}

	private isFunctionType(type: tsMorph.Type) {
		if (type.getCallSignatures().length > 0) {
			return true;
		}
		if (type.getUnionTypes().some((t) => t.getCallSignatures().length > 0)) {
			return true;
		}
		return false;
	}

	private isArrayType(type: tsMorph.Type) {
		if (type.isArray()) {
			return true;
		}
		if (type.getUnionTypes().some((t) => t.isArray())) {
			return true;
		}
		return false;
	}

	private isObjectType(type: tsMorph.Type) {
		if (type.isObject()) {
			return true;
		}
		if (type.getUnionTypes().some((t) => t.isObject())) {
			return true;
		}
		return false;
	}

	private getTypeKind(symbol: tsMorph.Symbol): TypeKind {
		const type = symbol.getTypeAtLocation(this.sourceFile);
		if (this.isFunctionType(type)) {
			return 'function';
		}
		if (this.isArrayType(type)) {
			return 'array';
		}
		if (this.isObjectType(type)) {
			return 'object';
		}
		return 'primitive';
	}

	private getDocumentation(symbol: tsMorph.Symbol): JSDoc {
		const jsDoc = symbol
			.getDeclarations()
			.filter((decl) => tsMorph.Node.isJSDocable(decl))
			.flatMap((decl) => decl.getJsDocs())
			.at(0);

		if (!jsDoc) {
			return {
				description: null,
				tags: []
			};
		}

		return {
			description: jsDoc.getDescription().trim(),
			tags: jsDoc.getTags().map((tag) => ({
				name: tag.getTagName(),
				value: tag.getCommentText() ?? null
			}))
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
		if (!interface_) {
			throw new Error(`Interface not found: ${name}`);
		}
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
	private framework: (typeof frameworks)[number];
	private project: tsMorph.Project;

	constructor(framework: (typeof frameworks)[number]) {
		this.framework = framework;
		this.project = new tsMorph.Project({
			skipAddingFilesFromTsConfig: true,
			tsConfigFilePath: join(MONOREPO_ROOT, 'packages', `skeleton-${this.framework.name}`, 'tsconfig.json')
		});
		this.project.addSourceFilesAtPaths(
			join(MONOREPO_ROOT, 'packages', `skeleton-${this.framework.name}`, 'dist', 'components/*/anatomy/*.d.ts')
		);
	}

	public getSourceFile(path: string): SourceFile {
		const sourceFile = this.project.getSourceFile(path);
		if (!sourceFile) {
			throw new Error(`Source file not found: ${path}`);
		}
		return new SourceFile(this.framework, sourceFile);
	}
}

function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function kebabToPascal(str: string) {
	return str.split('-').map(capitalize).join('');
}

async function getClassValue(component: string, part: string) {
	const { [`classes${kebabToPascal(component)}`]: classes } = await import(
		pathToFileURL(join(CLASSES_DIRECTORY, `${component}.js`)).toString()
	);
	const key = part
		.replace(new RegExp(`^${kebabToPascal(component).charAt(0).toUpperCase() + kebabToPascal(component).slice(1)}`), '')
		.replace(/^./, (c) => c.toLowerCase());
	if (!Object.hasOwn(classes, key)) {
		return;
	}
	return classes[key];
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

async function main() {
	for (const framework of frameworks) {
		const components = (
			await glob(`**/anatomy/*.d.ts`, {
				cwd: join(MONOREPO_ROOT, 'packages', `skeleton-${framework.name}`, 'dist', 'components'),
				absolute: true
			})
		).reduce(
			(acc, file) => {
				const parent = dirname(file).split(/[/\\]/).slice(-2, -1)[0];
				(acc[parent] = acc[parent] || []).push(file);
				return acc;
			},
			{} as Record<string, string[]>
		);
		const parser = new Parser(framework);

		const entries = await Promise.all(
			Object.entries(components).map(async ([component, files]) => ({
				path: join(OUTPUT_DIRECTORY, framework.name, `${component}.json`),
				content: JSON.stringify(
					Object.assign(
						{},
						...(await Promise.all(
							files.map(async (file) => {
								const sourceFile = parser.getSourceFile(file);
								const part = kebabToPascal(basename(file).replace(framework.config.declarationExtension, ''));
								const _interface = sourceFile.getInterface(`${part}Props`);
								const classValue = await getClassValue(component, part);
								if (classValue) {
									_interface.properties.push({
										name: framework.config.classPropertyName,
										type: 'string',
										typeKind: 'primitive',
										optional: true,
										JSDoc: {
											description: 'The base classes provided by Skeleton',
											tags: [
												{
													name: 'default',
													value: classValue
												}
											]
										}
									});
								}

								return { [_interface.name]: _interface.properties };
							})
						))
					),
					null,
					2
				)
			}))
		);
		await rm(join(OUTPUT_DIRECTORY, framework.name), { recursive: true, force: true });
		await mkdir(join(OUTPUT_DIRECTORY, framework.name), { recursive: true });
		await Promise.all(entries.map((entry) => writeFile(entry.path, entry.content)));
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
