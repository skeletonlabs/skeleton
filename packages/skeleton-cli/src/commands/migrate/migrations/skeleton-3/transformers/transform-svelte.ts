import { type AST, parse } from 'svelte/compiler';
import { walk, type Node } from 'estree-walker';
import MagicString from 'magic-string';
import { transformClasses } from './transform-classes.js';

function hasRange(node: Node | AST.SvelteNode): node is (Node | AST.SvelteNode) & { start: number; end: number } {
	return 'start' in node && 'end' in node && typeof node.start === 'number' && typeof node.end === 'number';
}

function transformSvelte(code: string) {
	const s = new MagicString(code);
	const ast = parse(code, {
		modern: true
	});
	const roots = [ast.instance, ast.module, ast.fragment].filter((node) => !!node);
	for (const root of roots) {
		walk(root as unknown as Node, {
			enter(node: Node | AST.SvelteNode, parent: Node | AST.SvelteNode | null) {
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
					s.update(node.start + 1, node.end - 1, transformClasses(node.value).code);
				}
				if (node.type === 'Text' && hasRange(node)) {
					s.update(node.start, node.end, transformClasses(node.data).code);
				}
				if (node.type === 'ClassDirective' && !(node.expression.type === 'Identifier' && !('loc' in node.expression) && node.name === node.expression.name) && hasRange(node)) {
					const adjustedStart = node.start + 'class:'.length;
					s.update(adjustedStart, adjustedStart + node.name.length, transformClasses(node.name).code);
				}
			}
		});
	}
	return {
		code: s.toString()
	};
}

export { transformSvelte };
