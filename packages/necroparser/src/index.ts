import { randomUUID } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import {
	createCompilerHost,
	createProgram,
	createSourceFile,
	forEachChild,
	ScriptTarget,
	Node,
	Type,
	TypeFlags,
	ObjectType,
	ObjectFlags,
	isInterfaceDeclaration,
	SymbolFlags,
	displayPartsToString
} from 'typescript';

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

function walk(node: Node, callback: (node: Node) => void) {
	forEachChild(node, (node) => {
		callback(node);
		walk(node, callback);
	});
}

function getTypeKind(type: Type): Interface['properties'][number]['typeKind'] {
	if (type.getCallSignatures().length > 0) {
		return 'function';
	}
	if (type.flags & TypeFlags.Intersection) {
		return 'intersection';
	}
	if (type.flags & TypeFlags.Union) {
		return 'union';
	}
	if (type.symbol?.name === 'Array' || type.symbol?.name === 'ReadonlyArray') {
		return 'array';
	}
	if (type.flags & TypeFlags.Object) {
		const objectType = type as ObjectType;
		if (
			objectType.objectFlags & (ObjectFlags.Reference | ObjectFlags.Interface | ObjectFlags.Anonymous) ||
			type.getProperties().length > 0
		) {
			return 'object';
		}
	}
	return 'primitive';
}

function getInterfaces(path: string) {
	const code = readFileSync(path, { encoding: 'utf-8' });
	const host = createCompilerHost({});
	const originalGetSourceFile = host.getSourceFile;
	host.getCurrentDirectory = () => dirname(path);
	const virtualFileName = `${randomUUID()}.tsx`;
	host.getSourceFile = (fileName, scriptTarget) => {
		if (fileName === virtualFileName) {
			return createSourceFile(fileName, code, ScriptTarget.Latest, true);
		}
		return originalGetSourceFile(resolve(dirname(path), fileName), scriptTarget);
	};
	const program = createProgram({
		rootNames: [virtualFileName],
		options: {},
		host: host
	});
	const root = program.getSourceFile(virtualFileName)!;
	const interfaces: Interface[] = [];
	walk(root, (node) => {
		if (!isInterfaceDeclaration(node)) {
			return;
		}
		const name = node.name.text;
		const typeChecker = program.getTypeChecker();
		const nodeType = typeChecker.getTypeAtLocation(node);
		const properties = nodeType.getProperties().map((property) => {
			const name = property.name;
			const propertyType = typeChecker.getTypeOfSymbolAtLocation(property, node);
			const type = typeChecker.typeToString(propertyType);
			const typeKind = getTypeKind(propertyType);
			const required = !(property.flags & SymbolFlags.Optional);
			const text = displayPartsToString(property.getDocumentationComment(typeChecker)) || null;
			const tags = property.getJsDocTags(typeChecker).map((tag) => {
				const name = tag.name;
				const value = displayPartsToString(tag.text);
				return {
					name: name,
					value: value === '' ? null : value
				};
			});
			return {
				name: name,
				type: type,
				typeKind: typeKind,
				required: required,
				documentation: {
					text: text,
					tags: tags
				}
			};
		});
		interfaces.push({
			name: name,
			properties: properties
		});
	});
	return interfaces;
}

export { getInterfaces };
