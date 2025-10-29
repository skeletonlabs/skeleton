import { findUpSync } from 'find-up';
import type { Root, RootContent } from 'mdast';
import { readFileSync } from 'node:fs';
import { globSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import { visit, SKIP } from 'unist-util-visit';

function loadTsconfigPaths() {
	const tsconfigPath = findUpSync('tsconfig.json', { cwd: import.meta.dirname });
	if (!tsconfigPath) {
		throw new Error('tsconfig.json not found');
	}
	const tsconfig = JSON.parse(readFileSync(tsconfigPath, 'utf-8'));
	const paths = new Map<string, string>();
	if (tsconfig.compilerOptions?.paths) {
		for (const [pattern, targets] of Object.entries(tsconfig.compilerOptions.paths)) {
			if (Array.isArray(targets) && targets.length > 0) {
				// Remove the /* suffix from pattern and target
				const cleanPattern = pattern.replace(/\/\*$/, '');
				const cleanTarget = (targets[0] as string).replace(/\/\*$/, '');
				paths.set(cleanPattern, cleanTarget);
			}
		}
	}
	return paths;
}

function extractImports(root: Root) {
	const imports = new Map<string, string>();

	visit(root, 'mdxjsEsm', (node) => {
		if ('value' in node && typeof node.value === 'string') {
			const importMatches = node.value.matchAll(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g);
			for (const match of importMatches) {
				const [, importName, importPath] = match;
				imports.set(importName, importPath);
			}
		}
	});

	return imports;
}

function readFileContents(importPath: string) {
	const tsconfigPaths = loadTsconfigPaths();

	const pathWithTsconfigResolved = Array.from(tsconfigPaths.entries()).reduce(
		(path, [pattern, target]) => (path.startsWith(pattern) ? path.replace(pattern, target) : path),
		importPath,
	);

	const pathWithoutRaw = pathWithTsconfigResolved.replace(/\?raw$/, '');

	const absolutePath = resolve(process.cwd(), pathWithoutRaw);
	const matchingFiles = globSync(`${absolutePath}.*`);

	if (matchingFiles.length === 0) {
		throw new Error(`No files found matching: ${absolutePath}`);
	}

	if (matchingFiles.length > 1) {
		throw new Error(`Multiple files found matching: ${absolutePath}`);
	}

	return readFileSync(matchingFiles[0], 'utf-8');
}

export function processPreviewComponents(root: Root) {
	const imports = extractImports(root);

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
					const fileContents = readFileContents(importPath);
					return {
						type: 'code',
						lang: extname(fileName).substring(1),
						value: fileContents,
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
