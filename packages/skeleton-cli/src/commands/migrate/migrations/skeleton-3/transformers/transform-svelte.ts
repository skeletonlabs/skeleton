import { type AST, parse } from 'svelte/compiler';
import type { Node } from 'estree';
import { type Visitors, walk } from 'zimmerframe';
import MagicString from 'magic-string';
import { transformClasses } from './transform-classes.js';

function hasRange(node: Node | AST.SvelteNode): node is (Node | AST.SvelteNode) & { start: number; end: number } {
	return 'start' in node && 'end' in node && typeof node.start === 'number' && typeof node.end === 'number';
}

function transformClassLocations(s: MagicString): Visitors<Node | AST.SvelteNode, unknown> {
	return {
		Literal(node, ctx) {
			const parent = ctx.path.at(-1);
			const parentIsImportDeclaration = parent && parent.type === 'ImportDeclaration';
			if (typeof node.value === 'string' && !parentIsImportDeclaration && hasRange(node)) {
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
			if (!(node.expression.type === 'Identifier' && !('loc' in node.expression) && node.name === node.expression.name) && hasRange(node)) {
				const adjustedStart = node.start + 'class:'.length;
				s.update(adjustedStart, adjustedStart + node.name.length, transformClasses(node.name).code);
			}
			ctx.next();
		}
	} satisfies Visitors<Node | AST.SvelteNode, unknown>;
}

function transformImports(s: MagicString) {
	return {
		// TODO
	} satisfies Visitors<Node | AST.SvelteNode, unknown>;
}

function transformSvelte(code: string) {
	const s = new MagicString(code);
	const root = parse(code, {
		modern: true
	});
	for (const ast of [root.instance, root.module, root.fragment].filter((node) => !!node)) {
		for (const visitors of [transformImports(s), transformClassLocations(s)]) {
			walk(ast as Node | AST.SvelteNode, {}, visitors);
		}
	}
	return {
		code: s.toString()
	};
}

export { transformSvelte };
