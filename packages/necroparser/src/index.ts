import { InterfaceDeclaration, JSDoc, Project, PropertyDeclaration, Type } from 'ts-morph';

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

class Parser {
	private project: Project;

	public constructor(...args: ConstructorParameters<typeof Project>) {
		this.project = new Project(...args);
	}

	public getInterfaces(path: string): Interface[] {
		const file = this.project.getSourceFileOrThrow(path);
		return file.getInterfaces().map((interface_) => {
			return {
				name: interface_.getName(),
				properties: this.getAllProperties(interface_).map((property) => {
					const type = property.getType();
					const jsdocs = property.getJsDocs();
					return {
						name: property.getName(),
						type: type.getText(),
						typeKind: this.determineTypeKind(type),
						required: !property.hasQuestionToken(),
						documentation: this.getDocumentation(jsdocs)
					};
				})
			};
		});
	}

	private getAllProperties(interfaceDeclaration: InterfaceDeclaration) {
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

export { Parser };
