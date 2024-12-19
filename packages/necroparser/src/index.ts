import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import * as ts from 'typescript';

interface Interface {
	name: string;
	properties: {
		name: string;
		type: string;
		typeKind: 'function' | 'array' | 'object' | 'primitive';
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

function walk(node: ts.Node, callback: (node: ts.Node) => void) {
	ts.forEachChild(node, (node) => {
		callback(node);
		walk(node, callback);
	});
}

function getTypeKind(type: ts.Type): Interface['properties'][number]['typeKind'] {
	if (type.getCallSignatures().length > 0) {
		return 'function';
	}
	if (type.symbol?.name === 'Array' || type.symbol?.name === 'ReadonlyArray') {
		return 'array';
	}
	if (type.flags & ts.TypeFlags.Object) {
		const objectType = type as ts.ObjectType;
		if (
			objectType.objectFlags & (ts.ObjectFlags.Reference | ts.ObjectFlags.Interface | ts.ObjectFlags.Anonymous) ||
			type.getProperties().length > 0
		) {
			return 'object';
		}
	}
	return 'primitive';
}

function getInterfaces(path: string) {
	const code = readFileSync(path, 'utf-8');
	const host = ts.createCompilerHost({});
	const originalGetSourceFile = host.getSourceFile;
	host.getCurrentDirectory = () => dirname(path);
	const virtualFileName = 'virtual.ts';
	host.getSourceFile = (fileName, scriptTarget) => {
		if (fileName === virtualFileName) {
			return ts.createSourceFile(fileName, code, ts.ScriptTarget.Latest, true);
		}
		return originalGetSourceFile(resolve(dirname(path), fileName), scriptTarget);
	};
	const program = ts.createProgram({
		rootNames: [virtualFileName],
		options: {},
		host: host
	});
	const typeChecker = program.getTypeChecker();
	const root = program.getSourceFile(virtualFileName)!;
	const interfaces: Interface[] = [];
	walk(root, (node) => {
		if (!ts.isInterfaceDeclaration(node)) {
			return;
		}
		const nodeType = typeChecker.getTypeAtLocation(node);
		interfaces.push({
			name: node.name.getText(),
			properties: nodeType.getProperties().map((property) => {
				const propertyType = typeChecker.getTypeOfSymbolAtLocation(property, node);
				return {
					name: property.getName(),
					type: typeChecker.typeToString(propertyType),
					typeKind: getTypeKind(propertyType),
					required: !(property.flags & ts.SymbolFlags.Optional),
					documentation: {
						text: ts.displayPartsToString(property.getDocumentationComment(typeChecker)) || null,
						tags: property.getJsDocTags(typeChecker).map((tag) => {
							const name = tag.name;
							const value = ts.displayPartsToString(tag.text);
							return {
								name: name,
								value: value === '' ? null : value
							};
						})
					}
				};
			})
		});
	});
	return interfaces;
}

export { getInterfaces };
