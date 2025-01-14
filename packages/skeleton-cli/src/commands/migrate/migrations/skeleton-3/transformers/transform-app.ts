import { AST, parse } from 'svelte/compiler';
import { walk, type Node } from 'estree-walker';
import MagicString from 'magic-string';

function transformApp(code: string, theme: string) {
	const s = new MagicString(code);
	const ast = parse(code, {
		modern: true
	});
	walk(ast.fragment as unknown as Node, {
		enter(node: AST.SvelteNode) {
			if (node.type === 'RegularElement' && node.name === 'body') {
				const dataThemeAttribute = node.attributes.find((attribute) => {
					return attribute.type === 'Attribute' && attribute.name === 'data-theme';
				});
				if (dataThemeAttribute) {
					s.update(dataThemeAttribute.start, dataThemeAttribute.end, `data-theme="${theme}"`);
				} else {
					s.appendRight(node.start + '<body'.length, ` data-theme="${theme}"`);
				}
			}
		}
	});

	return {
		code: s.toString()
	};
}

export { transformApp };
