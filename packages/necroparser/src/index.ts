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

	constructor(files: string[]) {
		this.program = ts.createProgram(files, {});
		this.typeChecker = this.program.getTypeChecker();
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

	public getInterfaces(filepath: string, options: GetInterfacesOptions = {}): Interface[] {
		const sourceFile = this.program.getSourceFile(filepath);
		if (!sourceFile) {
			throw new Error(`Filepath ${filepath} not found in the project. Ensure it was provided in the constructor.`);
		}
		const interfaces: Interface[] = [];
		ts.forEachChild(sourceFile, (node) => {
			if (!ts.isInterfaceDeclaration(node)) {
				return;
			}
			if (options.filter && !options.filter(node)) {
				return;
			}
			interfaces.push({
				name: node.name.getText(),
				properties: this.typeChecker
					.getTypeAtLocation(node)
					.getProperties()
					.map((property) => {
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
