import { randomUUID } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import {
	type CompilerOptions,
	type Node,
	ScriptTarget,
	createCompilerHost,
	createProgram,
	createSourceFile,
	forEachChild,
	Type,
	TypeFlags,
	ObjectType,
	ObjectFlags
} from 'typescript';
import { defaultCompilerOptions } from './constants.js';

export function parse(path: string, options: CompilerOptions = {}) {
	const code = readFileSync(path, { encoding: 'utf-8' });
	const compilerOptions = {
		...defaultCompilerOptions,
		baseUrl: dirname(path),
		paths: {
			'*': ['*', 'node_modules/*']
		},
		...options
	};
	const host = createCompilerHost(compilerOptions);
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
	return {
		root: root,
		...program
	};
}

export function walk(node: Node, callback: (node: Node) => void) {
	forEachChild(node, (node) => {
		callback(node);
		walk(node, callback);
	});
}

export function getTypeKind(type: Type) {
	if (type.getCallSignatures().length > 0) {
		return 'function';
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
