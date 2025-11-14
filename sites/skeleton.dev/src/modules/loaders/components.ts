import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { extname, join, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import * as svelte from 'svelte/compiler';
import { glob, globSync } from 'tinyglobby';
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

	constructor(framework: string) {
		this.project = new tsMorph.Project({
			skipAddingFilesFromTsConfig: true,
			tsConfigFilePath: join(PACKAGE_DIRECTORY(`skeleton-${framework}`), 'tsconfig.json'),
		});
		const filePaths = globSync('src/components/*/anatomy/*.{svelte,tsx}', {
			cwd: PACKAGE_DIRECTORY(`skeleton-${framework}`),
			absolute: true,
		});

		for (const filePath of filePaths) {
			switch (extname(filePath)) {
				case '.svelte':
					const content = readFileSync(filePath, 'utf-8');
					const ast = svelte.parse(content, {
						modern: true,
					});
					this.project.createSourceFile(
						filePath.replace('.svelte', '.ts'),
						content.slice(ast.instance?.start ?? 0, ast.instance?.end ?? 0),
					);
					break;
				case '.tsx':
				case '.ts':
					this.project.addSourceFileAtPathIfExists(filePath);
					break;
			}
		}
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
	const filePath = pathToFileURL(join(PACKAGE_DIRECTORY('skeleton-common'), 'src', 'classes', `${component}.ts`)).href;

	const project = new tsMorph.Project({
		useInMemoryFileSystem: false,
		skipAddingFilesFromTsConfig: true,
	});

	const sourceFile = project.addSourceFileAtPath(filePath);

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

	const propertyAssignment = argument.getPropertyOrThrow(kebabToPascal(part)).asKindOrThrow(tsMorph.SyntaxKind.PropertyAssignment);

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

function getComponentPartNameFromPath(path: string): string {
	const segments = path.split(/[\\/]/);
	const componentPart = segments.at(-1)?.split('.').at(0);
	if (!componentPart) {
		throw new Error(`Could not determine component part from path: ${path}`);
	}
	return componentPart;
}

async function getFrameworks() {
	return (
		await glob('packages/skeleton-*/src/components', {
			cwd: MONOREPO_DIRECTORY,
			onlyDirectories: true,
		})
	).map((directory) => directory.split(sep).at(-2)!.replace('skeleton-', ''));
}

export async function components() {
	const frameworks = await getFrameworks();
	const entries = await Promise.all(
		frameworks.map(async (framework) => {
			const parser = new Parser(framework);

			const anatomyPaths = await glob('src/components/*/modules/anatomy.{mts,ts}', {
				cwd: join(PACKAGE_DIRECTORY(`skeleton-${framework}`)),
			});
			const components = anatomyPaths.map((p) => p.split('/')[2]);

			const componentEntries = await Promise.all(
				components.map(async (component) => {
					if (!['preview', 'production'].includes(process.env.VERCEL_ENV ?? '')) {
						return {
							id: `${framework}/${component}`,
							name: component,
							types: [],
						};
					}
					try {
						const paths = await glob(`**/anatomy/*.ts`, {
							cwd: join(PACKAGE_DIRECTORY(`skeleton-${framework}`), 'src', 'components', component),
							absolute: true,
						});
						if (!paths.length) {
							return;
						}

						const partOrder = await getPartOrderFromAnatomy(framework, component);

						const types = (
							await Promise.all(
								paths.map(async (part) => {
									const sourceFile = parser.getSourceFile(part);
									const componentPartName = getComponentPartNameFromPath(part);
									const _interface = sourceFile.getInterface(`${kebabToPascal(component)}${kebabToPascal(componentPartName)}Props`);
									const classValue = await getClassValue(component, componentPartName);
									return {
										name: _interface.name,
										props: _interface.props,
										metadata: {
											classValue,
										},
									};
								}),
							)
						).toSorted((a, b) => {
							const aName = a.name.replace(/Props$/, '');
							const bName = b.name.replace(/Props$/, '');
							return partOrder.indexOf(aName) - partOrder.indexOf(bName);
						});

						return {
							id: `${framework}/${component}`,
							name: component,
							types,
						};
					} catch {
						return undefined;
					}
				}),
			);

			return componentEntries.filter((e): e is NonNullable<typeof e> => !!e);
		}),
	);

	return entries.flat();
}
