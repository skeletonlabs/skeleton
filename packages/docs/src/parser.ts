import { readFileSync } from 'node:fs';
import { extname } from 'node:path';
import { parse } from 'svelte/compiler';
import { Node, Project, SourceFile, Symbol, Type, ts } from 'ts-morph';
import type { Interface, JSDoc, Property, TypeKind } from './types.ts';

const project = new Project({ useInMemoryFileSystem: true, skipAddingFilesFromTsConfig: true });

export function createProjectForConfig(tsConfigFilePath: string): Project {
	return new Project({ skipAddingFilesFromTsConfig: true, tsConfigFilePath });
}

function isFunctionType(type: Type): boolean {
	return type.getCallSignatures().length > 0 || type.getUnionTypes().some((t) => t.getCallSignatures().length > 0);
}

function isArrayType(type: Type): boolean {
	return type.isArray() || type.getUnionTypes().some((t) => t.isArray());
}

function isObjectType(type: Type): boolean {
	return type.isObject() || type.getUnionTypes().some((t) => t.isObject());
}

function getTypeKind(symbol: Symbol, sourceFile: SourceFile): TypeKind {
	const type = symbol.getTypeAtLocation(sourceFile);
	if (isFunctionType(type)) return 'function';
	if (isArrayType(type)) return 'array';
	if (isObjectType(type)) return 'object';
	return 'primitive';
}

function getDocumentation(symbol: Symbol): JSDoc {
	const jsDoc = symbol
		.getDeclarations()
		.filter((decl) => Node.isJSDocable(decl))
		.flatMap((decl) => decl.getJsDocs())
		.at(0);

	if (!jsDoc) return { description: null, tags: [] };

	return {
		description: jsDoc.getDescription().trim(),
		tags: jsDoc.getTags().map((tag) => ({ name: tag.getTagName(), value: tag.getCommentText() ?? null })),
	};
}

export function getProperty(symbol: Symbol, sourceFile: SourceFile): Property {
	const type = symbol.getTypeAtLocation(sourceFile);
	return {
		name: symbol.getName(),
		type: type.getText(undefined, ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope),
		typeKind: getTypeKind(symbol, sourceFile),
		optional: symbol.isOptional(),
		JSDoc: getDocumentation(symbol),
	};
}

export function getInterface(name: string, sourceFile: SourceFile): Interface | undefined {
	const iface = sourceFile.getInterface(name);
	if (!iface) return undefined;

	iface.getExtends().forEach((ext) => {
		if (/HTMLAttributes<[^>]+>/.test(ext.getText())) {
			iface.removeExtends(ext);
		}
	});

	return {
		name: iface.getName(),
		props: iface
			.getType()
			.getProperties()
			.map((symbol) => getProperty(symbol, sourceFile)),
	};
}

export function createSourceFile(path: string, project: Project): SourceFile {
	switch (extname(path)) {
		case '.svelte': {
			const content = readFileSync(path, 'utf-8');
			const ast = parse(content, { modern: true });
			const moduleContent = content.slice(ast.module?.start ?? 0, ast.module?.end ?? 0);
			const virtualPath = path.replace('.svelte', '.ts');
			const existing = project.getSourceFile(virtualPath);
			if (existing) {
				existing.replaceWithText(moduleContent);
				return existing;
			}
			return project.createSourceFile(virtualPath, moduleContent);
		}
		case '.tsx': {
			const existing = project.getSourceFile(path);
			if (existing) return existing;
			return project.addSourceFileAtPath(path);
		}
	}
	throw new Error(`Unsupported file extension: ${extname(path)}`);
}

export function parseInMemory(virtualPath: string, content: string): SourceFile {
	const existing = project.getSourceFile(virtualPath);
	if (existing) {
		existing.replaceWithText(content);
		return existing;
	}
	return project.createSourceFile(virtualPath, content);
}
