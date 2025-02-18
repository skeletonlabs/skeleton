import { type AST, parse } from 'svelte/compiler';
import MagicString from 'magic-string';
import { walk } from 'zimmerframe';
import { THEME_MAPPINGS } from '../utility/theme-mappings';

function transformAppHtml(code: string) {
	const s = new MagicString(code);
	const ast = parse(code, {
		modern: true
	});
	let theme: string | undefined;
	walk(
		ast.fragment as AST.SvelteNode,
		{},
		{
			RegularElement(node, ctx) {
				if (node.name === 'body') {
					for (const attribute of node.attributes) {
						if (
							!(
								attribute.type === 'Attribute' &&
								attribute.name === 'data-theme' &&
								Array.isArray(attribute.value) &&
								attribute.value.length === 1 &&
								attribute.value[0].type === 'Text'
							)
						) {
							continue;
						}
						const theme = attribute.value[0].data;
						if (Object.hasOwn(THEME_MAPPINGS, theme)) {
							s.update(attribute.start, attribute.end, `data-theme="${THEME_MAPPINGS[theme]}"`);
						} else {
			$('html').attr('data-theme', theme);
			}
		}
	);
	return {
		code: s.toString(),
		meta: {
			theme: theme
		}
	};
}

export { transformAppHtml };
