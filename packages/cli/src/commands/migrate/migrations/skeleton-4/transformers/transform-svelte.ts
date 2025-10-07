import { hasRange } from '../../../../../utility/svelte/has-range';
import { renameComponent } from '../../../../../utility/svelte/rename-component';
import { IDENTIFIER_MAPPINGS } from '../utility/identifier-mappings';
import { IMPORT_MAPPINGS } from '../utility/import-mappings';
import { transformModule } from './transform-module';
import { transformStylesheet } from './transform-stylesheet';
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
		return;
	}
	const content = s.original.slice(script.content.start, script.content.end);
	const transformed = transformModule(content);
	s.overwrite(script.content.start, script.content.end, transformed.code);
}

function transformCss(s: MagicString, css: AST.CSS.StyleSheet | null) {
	if (!css) {
		return;
	}
	const transformed = transformStylesheet(s.original.slice(css.content.start, css.content.end));
	s.overwrite(css.content.start, css.content.end, transformed.code);
}

function transformFragment(s: MagicString, fragment: AST.Fragment) {
	walk(
		fragment as AST.SvelteNode,
		{},
		{
			Component(node, ctx) {
				const renamed = IMPORT_MAPPINGS[node.name];
				if (renamed && hasRange(node)) {
					renameComponent(s, node, renamed);
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
	transformScript(s, root.module);
	transformScript(s, root.instance);
	transformFragment(s, root.fragment);
	transformCss(s, root.css);
	return {
		code: s.toString(),
	};
}

export { transformSvelte };
