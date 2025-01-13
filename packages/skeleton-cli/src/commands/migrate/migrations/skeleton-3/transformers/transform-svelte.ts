import { readFile, writeFile } from 'node:fs/promises';
import { parse } from 'svelte/compiler';
import { walk, type Node } from 'estree-walker';
import MagicString from 'magic-string';
import { transformClasses } from './transform-classes.js';

function hasRange(node: Node): node is Node & { start: number; end: number } {
	return 'start' in node && 'end' in node && typeof node.start === 'number' && typeof node.end === 'number';
}

function transformSvelteContent(code: string) {
	const s = new MagicString(code);
	const ast = parse(code, {
		modern: true
	});

	for (const script of ['instance', 'module'] as const) {
		if (!ast[script]) {
			continue;
		}
		walk(ast[script].content, {
			enter(node, parent) {
				if (
					node.type === 'ImportDeclaration' &&
					node.source.type === 'Literal' &&
					node.source.value === '@skeletonlabs/skeleton' &&
					hasRange(node.source)
				) {
					// Add 1 to the start and subtract 1 from the end to exclude (and thus preserve) the quotes
					s.update(node.source.start + 1, node.source.end - 1, '@skeletonlabs/skeleton-svelte');
				}
				if (
					!(parent && parent.type === 'ImportDeclaration') &&
					node.type === 'Literal' &&
					typeof node.value === 'string' &&
					hasRange(node)
				) {
					// Add 1 to the start and subtract 1 from the end to exclude (and thus preserve) the quotes
					s.update(node.start + 1, node.end - 1, transformClasses(node.value));
				}
			}
		});
	}
	return s.toString();
}

async function transformSvelte(path: string) {
	const code = await readFile(path, 'utf-8');
	const transformed = transformSvelteContent(code);
	await writeFile(path, transformed);
}

export { transformSvelteContent, transformSvelte };
