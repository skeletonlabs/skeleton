import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import * as svelte from 'svelte/compiler';
import { glob } from 'tinyglobby';
import * as tsMorph from 'ts-morph';

const MONOREPO_DIRECTORY = join(import.meta.dirname, '..', '..', '..');
const PACKAGE_DIRECTORY = (name: string) => join(MONOREPO_DIRECTORY, 'packages', name);
const OUTPUT_DIRECTORY = join(MONOREPO_DIRECTORY, 'sites', 'skeleton.dev', 'src', 'content', 'component-types');

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

export interface ComponentEntry {
	name: string;
	types: Array<{
		name: string;
		props: Property[];
		metadata: { classValue: string | undefined };
	}>;
}

class SourceFile {
	private sourceFile: tsMorph.SourceFile;

	constructor(sourceFile: tsMorph.SourceFile) {
		this.sourceFile = sourceFile;
	}

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

	public getInterface(name: string): Interface | undefined {
		const interface_ = this.sourceFile.getInterface(name);
		if (!interface_) return undefined;

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
	private sharedProject: tsMorph.Project;

	constructor(tsConfigFilePath?: string) {
		this.project = new tsMorph.Project({
			skipAddingFilesFromTsConfig: true,
			tsConfigFilePath,
		});
		this.sharedProject = new tsMorph.Project({
			useInMemoryFileSystem: true,
			skipAddingFilesFromTsConfig: true,
		});
	}

	public createSourceFile(path: string): SourceFile {
		switch (extname(path)) {
			case '.svelte': {
				const content = readFileSync(path, 'utf-8');
				const ast = svelte.parse(content, { modern: true });
				const moduleContent = content.slice(ast.module?.start ?? 0, ast.module?.end ?? 0);
				const virtualPath = path.replace('.svelte', '.ts');
				const existing = this.project.getSourceFile(virtualPath);
				if (existing) {
					existing.replaceWithText(moduleContent);
					return new SourceFile(existing);
				}
				return new SourceFile(this.project.createSourceFile(virtualPath, moduleContent));
			}
			case '.tsx': {
				const existing = this.project.getSourceFile(path);
				if (existing) return new SourceFile(existing);
				return new SourceFile(this.project.addSourceFileAtPath(path));
			}
		}
		throw new Error(`Unsupported file extension: ${extname(path)}`);
	}

	public parseInMemory(virtualPath: string, content: string): tsMorph.SourceFile {
		const existing = this.sharedProject.getSourceFile(virtualPath);
		if (existing) {
			existing.replaceWithText(content);
			return existing;
		}
		return this.sharedProject.createSourceFile(virtualPath, content);
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

function getPartOrder(frameworkName: string, componentName: string, parser: Parser): string[] {
	const content = readFileSync(
		join(PACKAGE_DIRECTORY(`skeleton-${frameworkName}`), 'src', 'components', componentName, 'modules', 'anatomy.ts'),
		'utf-8',
	);
	const sourceFile = parser.parseInMemory('anatomy.ts', content);
	const order = [`${kebabToPascal(componentName)}Root`];
	const anatomy = sourceFile.getFirstDescendantByKind(tsMorph.SyntaxKind.ObjectLiteralExpression);
	if (anatomy) {
		order.push(
			...anatomy
				.getProperties()
				.filter(tsMorph.Node.isPropertyAssignment)
				.map((p) => {
					const name = p.getName();
					return ROOT_PARTS.includes(name) ? `${kebabToPascal(componentName)}Root${name}` : `${kebabToPascal(componentName)}${name}`;
				}),
		);
	}
	return order;
}

function loadClassValues(componentName: string, parser: Parser): Map<string, string> {
	const result = new Map<string, string>();
	const filePath = join(PACKAGE_DIRECTORY('skeleton-common'), 'src', 'classes', `${componentName}.ts`);

	let content: string;
	try {
		content = readFileSync(filePath, 'utf-8');
	} catch {
		return result;
	}

	const sourceFile = parser.parseInMemory(`classes-${componentName}.ts`, content);
	const variableDeclaration = sourceFile.getVariableDeclarations().find((d) => d.getName().startsWith('classes'));
	if (!variableDeclaration) return result;

	const initializerCallExpression = variableDeclaration.getInitializerIfKind(tsMorph.SyntaxKind.CallExpression);
	if (!initializerCallExpression) return result;

	const argument = initializerCallExpression.getArguments()[0];
	if (!argument || !argument.isKind(tsMorph.SyntaxKind.ObjectLiteralExpression)) return result;

	for (const prop of argument.getProperties()) {
		const assignment = prop.asKind(tsMorph.SyntaxKind.PropertyAssignment);
		if (!assignment) continue;

		const initializer = assignment.getInitializerOrThrow();
		let value: string | undefined;

		if (initializer.isKind(tsMorph.SyntaxKind.StringLiteral)) {
			value = initializer.getLiteralText();
		} else if (initializer.isKind(tsMorph.SyntaxKind.ArrayLiteralExpression)) {
			value = initializer
				.getElements()
				.map((el) => el.getText().replace(/['"`]/g, ''))
				.join(' ');
		}

		if (value !== undefined) {
			result.set(assignment.getName(), value);
		}
	}

	return result;
}

async function processFramework(frameworkName: string) {
	const path = PACKAGE_DIRECTORY(`skeleton-${frameworkName}`);
	const parser = new Parser(join(path, 'tsconfig.json'));
	const componentPaths = await glob('src/components/*', {
		cwd: path,
		onlyDirectories: true,
		absolute: true,
	});

	await Promise.all(componentPaths.map((componentPath) => processComponent(frameworkName, componentPath, parser)));
}

async function processComponent(frameworkName: string, componentPath: string, parser: Parser) {
	const componentName = componentPath.split('/').filter(Boolean).pop();
	if (!componentName) return;

	const [partPaths, partOrder, classValues] = await Promise.all([
		glob(`${componentPath}/anatomy/*.{svelte,tsx}`, { absolute: true }),
		Promise.resolve(getPartOrder(frameworkName, componentName, parser)),
		Promise.resolve(loadClassValues(componentName, parser)),
	]);

	const types = (await Promise.all(partPaths.map((partPath) => processPart(componentName, partPath, parser, classValues)))).filter(
		Boolean,
	) as ComponentEntry['types'];

	types.sort((a, b) => {
		const aName = a.name.replace(/Props$/, '');
		const bName = b.name.replace(/Props$/, '');
		return partOrder.indexOf(aName) - partOrder.indexOf(bName);
	});

	const entry: ComponentEntry = { name: componentName, types };

	const outputDir = join(OUTPUT_DIRECTORY, frameworkName);
	mkdirSync(outputDir, { recursive: true });
	writeFileSync(join(outputDir, `${componentName}.json`), JSON.stringify(entry, null, 2), 'utf-8');

	console.log(`  ✓ ${frameworkName}/${componentName} (${types.length} parts)`);
}

async function processPart(
	componentName: string,
	partPath: string,
	parser: Parser,
	classValues: Map<string, string>,
): Promise<ComponentEntry['types'][number] | undefined> {
	const partName = partPath.split('/').pop()?.replace(extname(partPath), '');
	if (!partName) return;

	const sourceFile = parser.createSourceFile(partPath);
	const typeName = `${kebabToPascal(componentName)}${kebabToPascal(partName)}Props`;
	const iface = sourceFile.getInterface(typeName);
	if (!iface) return;

	return {
		name: iface.name,
		props: iface.props,
		metadata: { classValue: classValues.get(kebabToCamel(partName)) },
	};
}

const frameworks = ['svelte', 'react'] as const;

console.log('Generating component types...\n');

await Promise.all(frameworks.map((framework) => processFramework(framework)));

console.log('\nDone.');
