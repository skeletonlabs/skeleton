import { hasRange } from '../../../../../utility/svelte/has-range.js';
import { transformClasses } from './transform-classes.js';
import { transformStylesheet } from './transform-stylesheet.js';
import { log } from '@clack/prompts';
import MagicString from 'magic-string';
import { parse } from 'svelte/compiler';
import type { AST } from 'svelte/compiler';
import { walk } from 'zimmerframe';

function transformCss(s: MagicString, css: AST.CSS.StyleSheet | null) {
	if (!css) {
		return;
	}
	try {
		const transformed = transformStylesheet(s.original.slice(css.content.start, css.content.end));
		s.overwrite(css.content.start, css.content.end, transformed.code);
	} catch (error) {
		log.warn(`Failed to transform CSS in Svelte component, skipping: ${error instanceof Error ? error.message : 'Unknown error'}`);
	}
}

function transformFragment(s: MagicString, fragment: AST.Fragment) {
	walk(
		fragment as AST.SvelteNode,
		{},
		{
			Literal(node, ctx) {
				const parent = ctx.path.at(-1);
				if (typeof node.raw === 'string' && node.raw !== '' && !(parent && parent.type === 'ImportDeclaration') && hasRange(node)) {
					s.update(node.start, node.end, transformClasses(node.raw).code);
				}
				ctx.next();
			},
			Text(node, ctx) {
				if (node.data !== '' && hasRange(node)) {
					s.update(node.start, node.end, transformClasses(node.data).code);
				}
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
			},
		},
	);
}

function transformSvelte(code: string) {
	const s = new MagicString(code);
	const root = parse(code, {
		modern: true,
	});
	transformFragment(s, root.fragment);
	transformCss(s, root.css);
	return {
		code: s.toString(),
	};
}

export { transformSvelte };
