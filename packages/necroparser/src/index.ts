import { Project, PropertySignature } from 'ts-morph';

interface Interface {
	name: string;
	properties: {
		name: string;
		type: string;
		typeKind: 'intersection' | 'union' | 'array' | 'function' | 'object' | 'primitive';
		required: boolean;
		documentation: {
			text: string | null;
			tags: {
				name: string;
				value: string | null;
			}[];
		};
	}[];
}

function getTypeKind(property: PropertySignature): Interface['properties'][number]['typeKind'] {
	const type = property.getType();
	if (type.isIntersection()) {
		return 'intersection';
	}
	if (type.isUnion() && !type.isBoolean()) {
		return 'union';
	}
	if (type.isArray()) {
		return 'array';
	}
	if (type.getCallSignatures().length > 0) {
		return 'function';
	}
	if (type.isObject()) {
		return 'object';
	}
	return 'primitive';
}

function getDocumentation(property: PropertySignature): Interface['properties'][number]['documentation'] {
	const docs = property.getJsDocs().at(0);
	if (!docs) {
		return {
			text: null,
			tags: []
		};
	}
	return {
		text: docs.getDescription(),
		tags: docs.getTags().map((tag) => {
			return {
				name: tag.getTagName(),
				value: tag.getCommentText() ?? null
			};
		})
	};
}

function getInterfaces(path: string): Interface[] {
	const project = new Project();
	const file = project.addSourceFileAtPath(path);
	return file.getInterfaces().map((interface_) => {
		return {
			name: interface_.getName(),
			properties: interface_.getProperties().map((property) => {
				return {
					name: property.getName(),
					type: property.getType().getText(),
					typeKind: getTypeKind(property),
					required: !property.hasQuestionToken(),
					documentation: getDocumentation(property)
				};
			})
		};
	});
}

export { getInterfaces };
