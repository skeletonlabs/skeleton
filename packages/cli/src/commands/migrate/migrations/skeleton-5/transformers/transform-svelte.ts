import { transformStylesheet } from './transform-stylesheet.js';
import { log } from '@clack/prompts';
import MagicString from 'magic-string';
import { parse } from 'svelte/compiler';
import type { AST } from 'svelte/compiler';

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

function transformSvelte(code: string) {
	const s = new MagicString(code);
	const root = parse(code, {
		modern: true,
	});
	transformCss(s, root.css);
	return {
		code: s.toString(),
	};
}

export { transformSvelte };
