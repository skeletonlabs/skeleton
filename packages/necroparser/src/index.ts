import { InterfaceDeclaration, JSDoc, Project as TsMorphProject, PropertySignature, Type } from 'ts-morph';

interface Tag {
	name: string;
	value: string | null;
}

interface Documentation {
	text: string | null;
	tags: Tag[];
}

interface Property {
	name: string;
	type: string;
	typeKind: 'function' | 'array' | 'object' | 'primitive';
	required: boolean;
	documentation: Documentation;
}

interface Interface {
	name: string;
	properties: Property[];
}

interface GetInterfacesOptions {
	filter?: (interfaceDeclaration: InterfaceDeclaration) => boolean;
	transformProperty?: (property: Property) => Property;
}

class Project {
	private project: TsMorphProject;

	public constructor(...args: ConstructorParameters<typeof TsMorphProject>) {
		this.project = new TsMorphProject(...args);
	}

	public getInterfaces(path: string, options: GetInterfacesOptions = {}): Interface[] {
		const file = this.project.getSourceFileOrThrow(path);
		return file
			.getInterfaces()
			.map((interfaceDeclaration) => {
				if (options.filter && !options.filter(interfaceDeclaration)) {
					return;
				}
				return {
					name: interfaceDeclaration.getName(),
					properties: this.getAllProperties(interfaceDeclaration).map((propertyDeclaration) => {
						const type = propertyDeclaration.getType();
						const jsdocs = propertyDeclaration.getJsDocs();
						const property: Property = {
							name: propertyDeclaration.getName(),
							type: type.getText(),
							typeKind: this.determineTypeKind(type),
							required: !propertyDeclaration.hasQuestionToken(),
							documentation: this.getDocumentation(jsdocs)
						};
						if (options.transformProperty) {
							return options.transformProperty(property);
						}
						return property;
					})
				};
			})
			.filter((interface_) => !!interface_);
	}

	private getAllProperties(interfaceDeclaration: InterfaceDeclaration): PropertySignature[] {
		const properties = interfaceDeclaration.getProperties();
		const baseTypes = interfaceDeclaration.getBaseTypes();
		for (const baseType of baseTypes) {
			const baseDecl = baseType.getSymbol()?.getDeclarations()[0];
			if (baseDecl instanceof InterfaceDeclaration) {
				properties.push(...this.getAllProperties(baseDecl));
			}
		}
		return properties;
	}

	private isFunctionType(type: Type) {
		return type.getCallSignatures().length > 0;
	}

	private isArrayType(type: Type) {
		return type.isArray();
	}

	private isObjectType(type: Type) {
		return type.isObject();
	}

	private determineTypeKind(type: Type): 'function' | 'array' | 'object' | 'primitive' {
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

	private getDocumentation(jsdocs: JSDoc[]): Documentation {
		return {
			tags: jsdocs.flatMap((jsdoc) => {
				return jsdoc.getTags().map((tag) => {
					return {
						name: tag.getTagName(),
						value: tag.getCommentText() ?? null
					};
				});
			}),
			text: jsdocs.map((jsdoc) => jsdoc.getDescription()).join('\n') || null
		};
	}
}

export { Project };
