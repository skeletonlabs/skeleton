import { InterfaceDeclaration, JSDoc, Project, ts, Type } from 'ts-morph';

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

class Parser {
	private project: Project;

	public constructor(...args: ConstructorParameters<typeof Project>) {
		this.project = new Project(...args);
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
					// TODO: Get all properties from extended interfaces
					// @see https://github.com/dsherret/ts-morph/issues/1619
					properties: interfaceDeclaration.getProperties().map((propertyDeclaration) => {
						const type = propertyDeclaration.getType();
						const jsdocs = propertyDeclaration.getJsDocs();
						const typeName =
							type.getSymbol()?.getName() ||
							type
								.getApparentType()
								.getText(undefined, ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope);
						const property: Property = {
							name: propertyDeclaration.getName(),
							type: typeName,
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

export { Parser };
