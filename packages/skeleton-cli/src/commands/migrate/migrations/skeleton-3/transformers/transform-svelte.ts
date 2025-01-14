import { type AST, parse } from 'svelte/compiler';
import type { Node } from 'estree';
import { walk } from 'zimmerframe';
import MagicString from 'magic-string';
import { transformClasses } from './transform-classes.js';

function hasRange(node: Node | AST.SvelteNode): node is (Node | AST.SvelteNode) & { start: number; end: number } {
	return 'start' in node && 'end' in node && typeof node.start === 'number' && typeof node.end === 'number';
}

function transformSvelte(code: string) {
	const s = new MagicString(code);
	const root = parse(code, {
		modern: true
	});
	const asts = [root.instance, root.module, root.fragment].filter((node) => !!node);
	for (const ast of asts) {
		walk(
			ast as Node | AST.SvelteNode,
			{},
			{
				ImportDeclaration(node, ctx) {
					if (node.source.type === 'Literal' && node.source.value === '@skeletonlabs/skeleton' && hasRange(node.source)) {
						// Add 1 to the start and subtract 1 from the end to exclude (and thus preserve) the quotes
						s.update(node.source.start + 1, node.source.end - 1, '@skeletonlabs/skeleton-svelte');
					}
					ctx.next();
				},
				Literal(node, ctx) {
					const parent = ctx.path.at(-1);
					if (typeof node.value === 'string' && !(parent && parent.type === 'ImportDeclaration') && hasRange(node)) {
						// Add 1 to the start and subtract 1 from the end to exclude (and thus preserve) the quotes
						s.update(node.start + 1, node.end - 1, transformClasses(node.value).code);
					}
					ctx.next();
				},
				Text(node, ctx) {
					s.update(node.start, node.end, transformClasses(node.data).code);
					ctx.next();
				},
				ClassDirective(node, ctx) {
					if (
						!(node.expression.type === 'Identifier' && !('loc' in node.expression) && node.name === node.expression.name) &&
						hasRange(node)
					) {
						const adjustedStart = node.start + 'class:'.length;
						s.update(adjustedStart, adjustedStart + node.name.length, transformClasses(node.name).code);
					}
					ctx.next();
				}
			}
		);
	}
	return {
		code: s.toString()
	};
}

export { transformSvelte };
