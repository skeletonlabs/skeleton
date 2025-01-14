import { type AST, parse } from 'svelte/compiler';
import MagicString from 'magic-string';
import { walk } from 'zimmerframe';

function transformApp(code: string, theme: string) {
	const s = new MagicString(code);
	const ast = parse(code, {
		modern: true
	});
	walk(
		ast.fragment as AST.SvelteNode,
		{},
		{
			RegularElement(node, ctx) {
				if (node.name === 'body') {
					const dataThemeAttribute = node.attributes.find((attribute) => {
						return attribute.type === 'Attribute' && attribute.name === 'data-theme';
					});
					const newDataThemeAttribute = `data-theme="${theme}"`;
					if (dataThemeAttribute) {
						s.update(dataThemeAttribute.start, dataThemeAttribute.end, newDataThemeAttribute);
					} else {
						s.appendLeft(node.start + '<body'.length, ` ${newDataThemeAttribute}`);
					}
				}
				ctx.next();
			}
		}
	);
	return {
		code: s.toString()
	};
}

export { transformApp };
