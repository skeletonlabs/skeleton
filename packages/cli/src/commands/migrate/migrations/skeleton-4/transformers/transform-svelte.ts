import { hasRange } from '../../../../../utility/svelte/has-range.js';
import { renameComponent } from '../../../../../utility/svelte/rename-component.js';
import { IDENTIFIER_MAPPINGS } from '../utility/identifier-mappings.js';
import { transformModule } from './transform-module.js';
import { transformStylesheet } from './transform-stylesheet.js';
import { log } from '@clack/prompts';
import MagicString from 'magic-string';
import { parse } from 'svelte/compiler';
import type { AST } from 'svelte/compiler';
import { walk } from 'zimmerframe';

function transformScript(s: MagicString, script: AST.Script | null) {
	if (
		!script ||
		!(
			'start' in script.content &&
			typeof script.content.start === 'number' &&
			'end' in script.content &&
			typeof script.content.end === 'number'
		)
	) {
		return {
			meta: {
				skeletonImports: [],
			},
		};
	}
	const content = s.original.slice(script.content.start, script.content.end);
	const transformed = transformModule(content);
	s.overwrite(script.content.start, script.content.end, transformed.code);
	return transformed;
}

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

function transformFragment(s: MagicString, fragment: AST.Fragment, skeletonImports: string[]) {
	walk(
		fragment as AST.SvelteNode,
		{},
		{
			Component(node, ctx) {
				if (Object.hasOwn(IDENTIFIER_MAPPINGS, node.name) && hasRange(node) && skeletonImports.includes(node.name.split('.').at(0) || '')) {
					renameComponent(s, node, IDENTIFIER_MAPPINGS[node.name]!);
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
	const skeletonImports = [
		...transformScript(s, root.module).meta.skeletonImports,
		...transformScript(s, root.instance).meta.skeletonImports,
	];
	transformFragment(s, root.fragment, skeletonImports);
	transformCss(s, root.css);
	return {
		code: s.toString(),
	};
}

export { transformSvelte };
