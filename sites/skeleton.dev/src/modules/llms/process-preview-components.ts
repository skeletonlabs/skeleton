import type { Root, RootContent } from 'mdast';
import { readFileSync } from 'node:fs';
import { extname } from 'node:path';
import { ResolverFactory } from 'oxc-resolver';
import { Project } from 'ts-morph';
import { visit, SKIP } from 'unist-util-visit';

function getDefaultImports(root: Root) {
	const imports = new Map<string, string>();
	const project = new Project({
		useInMemoryFileSystem: true,
		skipAddingFilesFromTsConfig: true,
	});

	visit(root, 'mdxjsEsm', (node) => {
		const sourceFile = project.createSourceFile('temp.ts', node.value, { overwrite: true });
		for (const declaration of sourceFile.getImportDeclarations()) {
			const defaultImport = declaration.getDefaultImport();
			if (!defaultImport) {
				continue;
			}
			const importPath = declaration.getModuleSpecifierValue();
			imports.set(defaultImport.getText(), importPath);
		}
		project.removeSourceFile(sourceFile);
	});

	return imports;
}

const resolve = new ResolverFactory({
	tsconfig: 'auto',
	extensions: ['.ts', '.tsx', '.js', '.jsx'],
});

function resolveImportPath(importPath: string) {
	const importPathWithoutQuery = importPath.replace(/\?.*$/, '');
	const resolved = resolve.sync(process.cwd(), importPathWithoutQuery);
	if (resolved.error) {
		throw new Error(resolved.error);
	}
	if (!resolved.path) {
		throw new Error(`Could not resolve import path: ${importPath}`);
	}
	return resolved.path;
}

export function processPreviewComponents(root: Root) {
	const imports = getDefaultImports(root);

	visit(root, 'mdxJsxFlowElement', (node, index, parent) => {
		if (!index || !parent || node.name !== 'Preview') {
			return;
		}
		const filesAttribute = node.attributes.find((attribute) => attribute.type === 'mdxJsxAttribute' && attribute.name === 'files');

		if (!filesAttribute || !filesAttribute.value || typeof filesAttribute.value !== 'object') {
			return;
		}

		if ('value' in filesAttribute.value && typeof filesAttribute.value.value === 'string') {
			const filesExpression = filesAttribute.value.value;

			const fileMatches = filesExpression.matchAll(/['"]([^'"]+)['"]\s*:\s*(\w+)/g);

			const codeBlocks = Array.from(fileMatches)
				.map(([, fileName, importVarName]) => {
					const importPath = imports.get(importVarName);
					if (!importPath) {
						return;
					}
					const resolvedImportPath = resolveImportPath(importPath);
					return {
						type: 'code',
						lang: extname(fileName).substring(1),
						value: readFileSync(resolvedImportPath, 'utf-8'),
					};
				})
				.filter(Boolean);

			if (codeBlocks.length > 0) {
				parent.children.splice(index, 1, ...(codeBlocks as RootContent[]));
				return [SKIP, index];
			}
		}
	});
}
