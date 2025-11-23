import type { Loader, LoaderContext } from 'astro/loaders';
import { readFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import * as svelte from 'svelte/compiler';
import { glob } from 'tinyglobby';
import * as tsMorph from 'ts-morph';

const MONOREPO_DIRECTORY = join(import.meta.dirname, '..', '..', '..', '..', '..');
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

	constructor(tsConfigFilePath?: string) {
		this.project = new tsMorph.Project({
			skipAddingFilesFromTsConfig: true,
			tsConfigFilePath: tsConfigFilePath,
		});
	}

	public createSourceFile(path: string): SourceFile {
		switch (extname(path)) {
			case '.svelte':
				const content = readFileSync(path, 'utf-8');
				const ast = svelte.parse(content, {
					modern: true,
				});
				return new SourceFile(
					this.project.createSourceFile(path.replace('.svelte', '.ts'), content.slice(ast.module?.start ?? 0, ast.module?.end ?? 0)),
				);
			case '.tsx':
				return new SourceFile(this.project.addSourceFileAtPath(path));
		}
		throw new Error(`Unsupported file extension: ${extname(path)}`);
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

async function getPartOrder(frameworkName: string, componentName: string) {
	const project = new tsMorph.Project({
		useInMemoryFileSystem: true,
		skipAddingFilesFromTsConfig: true,
	});
	const sourceFile = project.createSourceFile(
		`anatomy.ts`,
		readFileSync(
			join(PACKAGE_DIRECTORY(`skeleton-${frameworkName}`), 'src', 'components', componentName, 'modules', `anatomy.ts`),
			'utf-8',
		),
	);
	const order = [`${kebabToPascal(componentName)}Root`];
	const anatomy = sourceFile.getFirstDescendantByKind(tsMorph.SyntaxKind.ObjectLiteralExpression);
	if (anatomy) {
		order.push(
			...anatomy
				.getProperties()
				.filter(tsMorph.Node.isPropertyAssignment)
				.map((p) => {
					const name = p.getName();
					if (ROOT_PARTS.includes(name)) {
						return `${kebabToPascal(componentName)}Root${name}`;
					}
					return `${kebabToPascal(componentName)}${name}`;
				}),
		);
	}
	return order;
}

async function getClassValue(componentName: string, partName: string) {
	const filePath = join(PACKAGE_DIRECTORY('skeleton-common'), 'src', 'classes', `${componentName}.ts`);
	const project = new tsMorph.Project({
		useInMemoryFileSystem: false,
		skipAddingFilesFromTsConfig: true,
	});
	const sourceFile = project.addSourceFileAtPathIfExists(filePath);
	if (!sourceFile) {
		return;
	}
	const variableDeclaration = sourceFile.getVariableDeclarations().find((declaration) => declaration.getName().startsWith('classes'));
	if (!variableDeclaration) {
		throw new Error('Could not find classes export');
	}
	const initializerCallExpression = variableDeclaration.getInitializerIfKind(tsMorph.SyntaxKind.CallExpression);
	if (!initializerCallExpression) {
		throw new Error('Initializer is not a call expression');
	}
	const argument = initializerCallExpression.getArguments()[0];
	if (!argument || !argument.isKind(tsMorph.SyntaxKind.ObjectLiteralExpression)) {
		throw new Error('Expected object literal as first argument');
	}
	const propertyAssignment = argument.getProperty(kebabToCamel(partName))?.asKind(tsMorph.SyntaxKind.PropertyAssignment);
	if (!propertyAssignment) {
		return;
	}
	const initializer = propertyAssignment.getInitializerOrThrow();
	if (initializer.isKind(tsMorph.SyntaxKind.StringLiteral)) {
		return initializer.getLiteralText();
	}
	if (initializer.isKind(tsMorph.SyntaxKind.ArrayLiteralExpression)) {
		const values = initializer.getElements().map((element) => element.getText().replace(/['"`]/g, ''));
		return values.join(' ');
	}
	throw new Error('Part is not a string literal or array');
}

async function processFramework(context: LoaderContext, frameworkName: string) {
	const path = PACKAGE_DIRECTORY(`skeleton-${frameworkName}`);
	const parser = new Parser(join(path, 'tsconfig.json'));
	const componentPaths = await glob('src/components/*', {
		cwd: path,
		onlyDirectories: true,
		absolute: true,
	});
	await Promise.all(componentPaths.map((componentPath) => processComponent(context, frameworkName, componentPath, parser)));
}

async function processComponent(context: LoaderContext, frameworkName: string, componentPath: string, parser: Parser) {
	const componentName = componentPath.split('/').filter(Boolean).pop();
	if (!componentName) {
		return;
	}
	if (!['preview', 'production'].includes(process.env.VERCEL_ENV ?? '')) {
		return {
			id: `${frameworkName}/${componentName}`,
			name: componentName,
			types: [],
		};
	}
	const partPaths = await glob(`${componentPath}/anatomy/*.{svelte,tsx}`, {
		absolute: true,
	});
	const types = (await Promise.all(partPaths.map((p) => processPart(componentName, p, parser)))).filter(Boolean) as Array<{
		name: string;
		props: unknown;
		metadata: unknown;
	}>;
	const partOrder = await getPartOrder(frameworkName, componentName);
	types.sort((a, b) => {
		const aName = a.name.replace(/Props$/, '');
		const bName = b.name.replace(/Props$/, '');
		return partOrder.indexOf(aName) - partOrder.indexOf(bName);
	});
	context.store.set({
		id: `${frameworkName}/${componentName}`,
		data: {
			name: componentName,
			types,
		},
	});
}

async function processPart(componentName: string, partPath: string, parser: Parser) {
	const partName = partPath.split('/').pop()?.replace(extname(partPath), '');
	if (!partName) {
		return;
	}
	const sourceFile = parser.createSourceFile(partPath);
	const typeName = `${kebabToPascal(componentName)}${kebabToPascal(partName)}Props`;
	const iface = sourceFile.getInterface(typeName);
	if (!iface) {
		return;
	}
	const classValue = await getClassValue(componentName, partName);
	return {
		name: iface.name,
		props: iface.props,
		metadata: {
			classValue,
		},
	};
}

export function createComponentsLoader(): Loader {
	return {
		name: 'components-loader',
		async load(context) {
			const frameworks = ['svelte', 'react'] as const;
			await Promise.all(frameworks.map(async (framework) => processFramework(context, framework)));
		},
	};
}
