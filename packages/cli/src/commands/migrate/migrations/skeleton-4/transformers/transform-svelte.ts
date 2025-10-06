import MagicString from 'magic-string';
import { parse } from 'svelte/compiler';
import type { AST } from 'svelte/compiler';

// oxlint-disable-next-line no-unused-vars
// oxlint-disable-next-line no-unused-vars
function transformScript(s: MagicString, script: AST.Script | null) {}

// oxlint-disable-next-line no-unused-vars
// oxlint-disable-next-line no-unused-vars
function transformCss(s: MagicString, css: AST.CSS.StyleSheet | null) {}

// oxlint-disable-next-line no-unused-vars
// oxlint-disable-next-line no-unused-vars
function transformFragment(s: MagicString, fragment: AST.Fragment) {}

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
