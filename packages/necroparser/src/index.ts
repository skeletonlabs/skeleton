import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import ts from 'typescript';

interface DocumentationTag {
	name: string;
	value: string | null;
}

interface PropertyDocumentation {
	text: string | null;
	tags: DocumentationTag[];
}

interface InterfaceProperty {
	name: string;
	type: string;
	typeKind: 'function' | 'array' | 'object' | 'primitive';
	required: boolean;
	documentation: PropertyDocumentation;
}

interface Interface {
	name: string;
	properties: InterfaceProperty[];
}

function isFunctionType(type: ts.Type) {
	return type.getCallSignatures().length > 0;
}

function isArrayType(type: ts.Type) {
	return type.symbol?.name === 'Array' || type.symbol?.name === 'ReadonlyArray';
}

function isObjectType(type: ts.Type): boolean {
	if (!(type.flags & ts.TypeFlags.Object)) {
		return false;
	}
	const objectType = type as ts.ObjectType;
	const hasObjectFlags = Boolean(objectType.objectFlags & (ts.ObjectFlags.Reference | ts.ObjectFlags.Interface | ts.ObjectFlags.Anonymous));
	return hasObjectFlags || type.getProperties().length > 0;
}

function determineTypeKind(type: ts.Type): InterfaceProperty['typeKind'] {
	if (isFunctionType(type)) {
		return 'function';
	}
	if (isArrayType(type)) {
		return 'array';
	}
	if (isObjectType(type)) {
		return 'object';
	}
	return 'primitive';
}

function parseDocumentation(symbol: ts.Symbol, typeChecker: ts.TypeChecker): PropertyDocumentation {
	return {
		text: ts.displayPartsToString(symbol.getDocumentationComment(typeChecker)) || null,
		tags: symbol.getJsDocTags(typeChecker).map((tag) => ({
			name: tag.name,
			value: ts.displayPartsToString(tag.text) || null
		}))
	};
}

function parseProperty(property: ts.Symbol, node: ts.Node, typeChecker: ts.TypeChecker): InterfaceProperty {
	const propertyType = typeChecker.getTypeOfSymbolAtLocation(property, node);
	return {
		name: property.getName(),
		type: typeChecker.typeToString(propertyType),
		typeKind: determineTypeKind(propertyType),
		required: !(property.flags & ts.SymbolFlags.Optional),
		documentation: parseDocumentation(property, typeChecker)
	};
}

function createVirtualCompilerHost(sourcePath: string, sourceCode: string): ts.CompilerHost {
	const host = ts.createCompilerHost({});
	const originalGetSourceFile = host.getSourceFile;
	const virtualFileName = 'virtual.ts';
	host.getCurrentDirectory = () => dirname(sourcePath);
	host.getSourceFile = (fileName, scriptTarget) => {
		if (fileName === virtualFileName) {
			return ts.createSourceFile(fileName, sourceCode, ts.ScriptTarget.Latest, true);
		}
		return originalGetSourceFile(resolve(dirname(sourcePath), fileName), scriptTarget);
	};
	return host;
}

function walkAst(node: ts.Node, callback: (node: ts.Node) => void): void {
	ts.forEachChild(node, (childNode) => {
		callback(childNode);
		walkAst(childNode, callback);
	});
}

function getInterfaces(path: string): Interface[] {
	const sourceCode = readFileSync(path, 'utf-8');
	const host = createVirtualCompilerHost(path, sourceCode);
	const program = ts.createProgram({
		rootNames: ['virtual.ts'],
		options: {},
		host
	});
	const typeChecker = program.getTypeChecker();
	const sourceFile = program.getSourceFile('virtual.ts')!;
	const interfaces: Interface[] = [];
	walkAst(sourceFile, (node) => {
		if (!ts.isInterfaceDeclaration(node)) {
			return;
		}
		const nodeType = typeChecker.getTypeAtLocation(node);
		interfaces.push({
			name: node.name.getText(),
			properties: nodeType.getProperties().map((property) => parseProperty(property, node, typeChecker))
		});
	});
	return interfaces;
}

export { getInterfaces };
