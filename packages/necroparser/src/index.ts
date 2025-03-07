import { readFileSync } from 'node:fs';
import { dirname } from 'node:path';
import ts from 'typescript';

interface Interface {
	name: string;
	properties: Property[];
}

interface Property {
	name: string;
	type: string;
	typeKind: 'function' | 'array' | 'object' | 'primitive';
	required: boolean;
	documentation: Documentation;
}

interface Documentation {
	text: string | null;
	tags: Tag[];
}

interface Tag {
	name: string;
	value: string | null;
}

interface GetInterfacesOptions {
	filter?: (interfaceDeclaration: ts.InterfaceDeclaration) => boolean;
	transformProperty?: (property: Property) => Property;
}

export class Project {
	private program: ts.Program;
	private typeChecker: ts.TypeChecker;
	private sourceFiles: Map<string, ts.SourceFile>;

	constructor(filepaths: string[]) {
		this.sourceFiles = new Map();
		const host = this.createVirtualCompilerHost(filepaths);
		this.program = ts.createProgram({
			rootNames: filepaths,
			options: {},
			host
		});
		this.typeChecker = this.program.getTypeChecker();
		for (const filepath of filepaths) {
			const sourceFile = this.program.getSourceFile(filepath);
			if (sourceFile) {
				this.sourceFiles.set(filepath, sourceFile);
			}
		}
	}

	private createVirtualCompilerHost(filepaths: string[]): ts.CompilerHost {
		const host = ts.createCompilerHost({});
		const originalGetSourceFile = host.getSourceFile;
		host.getSourceFile = (fileName, scriptTarget) => {
			if (filepaths.includes(fileName)) {
				const sourceCode = readFileSync(fileName, 'utf-8');
				return ts.createSourceFile(fileName, sourceCode, ts.ScriptTarget.Latest, true);
			}
			return originalGetSourceFile(fileName, scriptTarget);
		};
		host.getCurrentDirectory = () => dirname(filepaths[0]); // Use the first file's directory as base
		return host;
	}

	private isFunctionType(type: ts.Type): boolean {
		return type.getCallSignatures().length > 0;
	}

	private isArrayType(type: ts.Type): boolean {
		return type.symbol?.name === 'Array' || type.symbol?.name === 'ReadonlyArray';
	}

	private isObjectType(type: ts.Type): boolean {
		if (!(type.flags & ts.TypeFlags.Object)) {
			return false;
		}
		const objectType = type as ts.ObjectType;
		const hasObjectFlags = Boolean(
			objectType.objectFlags & (ts.ObjectFlags.Reference | ts.ObjectFlags.Interface | ts.ObjectFlags.Anonymous)
		);
		return hasObjectFlags || type.getProperties().length > 0;
	}

	private determineTypeKind(type: ts.Type): 'function' | 'array' | 'object' | 'primitive' {
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

	private parseDocumentation(symbol: ts.Symbol): Documentation {
		return {
			text: ts.displayPartsToString(symbol.getDocumentationComment(this.typeChecker)) || null,
			tags: symbol.getJsDocTags(this.typeChecker).map((tag) => ({
				name: tag.name,
				value: ts.displayPartsToString(tag.text) || null
			}))
		};
	}

	private parseProperty(property: ts.Symbol, node: ts.Node): Property {
		const propertyType = this.typeChecker.getTypeOfSymbolAtLocation(property, node);
		return {
			name: property.getName(),
			type: this.typeChecker.typeToString(propertyType),
			typeKind: this.determineTypeKind(propertyType),
			required: !(property.flags & ts.SymbolFlags.Optional),
			documentation: this.parseDocumentation(property)
		};
	}

	private walkAst(node: ts.Node, callback: (node: ts.Node) => void): void {
		ts.forEachChild(node, (childNode) => {
			callback(childNode);
			this.walkAst(childNode, callback);
		});
	}

	public getInterfaces(filepath: string, options: GetInterfacesOptions = {}): Interface[] {
		const sourceFile = this.sourceFiles.get(filepath);
		if (!sourceFile) {
			throw new Error(`Filepath ${filepath} not found in the project. Ensure it was provided in the constructor.`);
		}

		const interfaces: Interface[] = [];
		this.walkAst(sourceFile, (node) => {
			if (!ts.isInterfaceDeclaration(node)) {
				return;
			}
			const name = node.name.getText();
			if (options.filter && !options.filter(node)) {
				return;
			}
			const nodeType = this.typeChecker.getTypeAtLocation(node);
			interfaces.push({
				name: name,
				properties: nodeType.getProperties().map((property) => {
					const parsedProperty = this.parseProperty(property, node);
					if (options.transformProperty) {
						return options.transformProperty(parsedProperty);
					}
					return parsedProperty;
				})
			});
		});
		return interfaces;
	}
}
