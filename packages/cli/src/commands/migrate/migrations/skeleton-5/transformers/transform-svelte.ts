import { hasRange } from '../../../../../utility/svelte/has-range.js';
import type { ManualStep } from '../utility/manual-steps.js';
import { transformClasses } from './transform-classes.js';
import { transformStylesheet } from './transform-stylesheet.js';
import { log } from '@clack/prompts';
import MagicString from 'magic-string';
import { parse } from 'svelte/compiler';
import type { AST } from 'svelte/compiler';
import { walk } from 'zimmerframe';

function transformCss(s: MagicString, css: AST.CSS.StyleSheet | null): ManualStep[] {
	if (!css) {
		return [];
	}
	try {
		// A component `<style>` overrides tokens rather than defining a whole theme, so don't inject
		// the v5 "added" tokens here — that's reserved for standalone theme stylesheets.
		const transformed = transformStylesheet(s.original.slice(css.content.start, css.content.end), { addMissingTokens: false });
		s.overwrite(css.content.start, css.content.end, transformed.code);
		return transformed.meta.manual;
	} catch (error) {
		log.warn(`Failed to transform CSS in Svelte component, skipping: ${error instanceof Error ? error.message : 'Unknown error'}`);
		return [];
	}
}

// Renames are applied to every string literal / text node, but manual-step detection is scoped to
// real class contexts so ordinary prose (e.g. the word "code") is never mistaken for a class.
function isInClassAttribute(path: readonly AST.SvelteNode[]): boolean {
	return path.some((node) => node.type === 'Attribute' && (node as AST.Attribute).name === 'class');
}

function transformFragment(s: MagicString, fragment: AST.Fragment): ManualStep[] {
	const manual: ManualStep[] = [];
	walk(
		fragment as AST.SvelteNode,
		{},
		{
			Literal(node, ctx) {
				const parent = ctx.path.at(-1);
				if (typeof node.raw === 'string' && node.raw !== '' && !(parent && parent.type === 'ImportDeclaration') && hasRange(node)) {
					const result = transformClasses(node.raw);
					s.update(node.start, node.end, result.code);
					if (isInClassAttribute(ctx.path)) {
						manual.push(...result.meta.manual);
					}
				}
				ctx.next();
			},
			Text(node, ctx) {
				if (node.data !== '' && hasRange(node)) {
					const result = transformClasses(node.data);
					s.update(node.start, node.end, result.code);
					if (isInClassAttribute(ctx.path)) {
						manual.push(...result.meta.manual);
					}
				}
				ctx.next();
			},
			ClassDirective(node, ctx) {
				if (
					!(node.expression.type === 'Identifier' && !('loc' in node.expression) && node.name === node.expression.name) &&
					hasRange(node)
				) {
					const result = transformClasses(node.name);
					manual.push(...result.meta.manual);
					const transformed = result.code.trim();
					if (transformed === '') {
						// The class was removed in v5 (e.g. `card-hover`). Blanking the name would
						// leave invalid `class:={...}` syntax, so drop the whole directive instead
						// (plus one leading space so we don't leave a dangling gap).
						const start = s.original[node.start - 1] === ' ' ? node.start - 1 : node.start;
						s.remove(start, node.end);
					} else {
						const adjustedStart = node.start + 'class:'.length;
						s.update(adjustedStart, adjustedStart + node.name.length, transformed);
					}
				}
				ctx.next();
			},
		},
	);
	return manual;
}

function transformSvelte(code: string) {
	const s = new MagicString(code);
	const root = parse(code, {
		modern: true,
	});
	const manual = [...transformFragment(s, root.fragment), ...transformCss(s, root.css)];
	return {
		code: s.toString(),
		meta: { manual },
	};
}

export { transformSvelte };
