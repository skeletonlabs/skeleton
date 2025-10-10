import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { fileURLToPath } from 'node:url';
import { glob } from 'tinyglobby';
import * as tsMorph from 'ts-morph';

const MONOREPO_DIRECTORY = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const SITE_DIRECTORY = (name: string) => join(MONOREPO_DIRECTORY, 'sites', name);
const PACKAGE_DIRECTORY = (name: string) => join(MONOREPO_DIRECTORY, 'packages', name);

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
	props: Property[];
}

class SourceFile {
	constructor(private sourceFile: tsMorph.SourceFile) {}

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
			return { description: null, tags: [] };
		}

		return {
			description: jsDoc.getDescription().trim(),
			tags: jsDoc.getTags().map((tag) => ({ name: tag.getTagName(), value: tag.getCommentText() ?? null })),
		};
	}

	public getProperty(symbol: tsMorph.Symbol): Property {
		const type = symbol.getTypeAtLocation(this.sourceFile);
		return {
			name: symbol.getName(),
			type: type.getText(undefined, tsMorph.ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope),
			typeKind: this.getTypeKind(symbol),
			optional: symbol.isOptional(),
			JSDoc: this.getDocumentation(symbol),
		};
	}

	public getInterface(name: string): Interface {
		const interface_ = this.sourceFile.getInterface(name);
		if (!interface_) {
			throw new Error(`Interface not found: ${name}`);
		}

		interface_.getExtends().forEach((ext) => {
			if (/HTMLAttributes<[^>]+>/.test(ext.getText())) {
				interface_.removeExtends(ext);
			}
		});

		return {
			name: interface_.getName(),
			props: interface_
				.getType()
				.getProperties()
				.map((symbol) => this.getProperty(symbol)),
		};
	}
}

class Parser {
	private project: tsMorph.Project;

	constructor(framework: string) {
		this.project = new tsMorph.Project({
			skipAddingFilesFromTsConfig: true,
			tsConfigFilePath: join(PACKAGE_DIRECTORY(`skeleton-${framework}`), 'tsconfig.json'),
		});
		this.project.addSourceFilesAtPaths(join(PACKAGE_DIRECTORY(`skeleton-${framework}`), 'dist', 'components/*/anatomy/*.d.ts'));
	}

	public getSourceFile(path: string): SourceFile {
		const sourceFile = this.project.getSourceFile(path);
		if (!sourceFile) {
			throw new Error(`Source file not found: ${path}`);
		}
		return new SourceFile(sourceFile);
	}
}

function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function kebabToPascal(str: string) {
	return str.split('-').map(capitalize).join('');
}

function kebabToCamel(str: string) {
	const pascal = kebabToPascal(str);
	return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

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
		const module = await import(
			/* @vite-ignore */ pathToFileURL(join(PACKAGE_DIRECTORY('skeleton-common'), 'dist', 'classes', `${component}.js`)).href
		);
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

export async function generateTypeDocumentation() {
	const OUTPUT_DIRECTORY = join(SITE_DIRECTORY('skeleton.dev'), 'src', 'content', 'types');
	await rm(OUTPUT_DIRECTORY, { recursive: true, force: true });
	await mkdir(OUTPUT_DIRECTORY, { recursive: true });
	for (const framework of ['svelte', 'react'] as const) {
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
