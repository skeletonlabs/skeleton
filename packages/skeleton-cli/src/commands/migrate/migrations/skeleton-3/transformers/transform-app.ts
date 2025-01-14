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
				const newDataThemeAttribute = `data-theme="${theme}"`;
				if (dataThemeAttribute) {
					s.update(dataThemeAttribute.start, dataThemeAttribute.end, newDataThemeAttribute);
				} else {
					s.appendLeft(node.start + '<body'.length, ` ${newDataThemeAttribute}`);
				}
			}
		}
	});
	return {
		code: s.toString()
	};
}

export { transformApp };
