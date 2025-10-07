import type { Theme } from '../utility/types';
import { transformStylesheet } from './transform-stylesheet';
import { atRule, comment, parse } from 'postcss';
import type { AtRule, Node, Root } from 'postcss';

function getTailwindImport(root: Root) {
	let tailwindImport: AtRule | undefined;
	root.walkAtRules('import', (atRule) => {
		if (atRule.params.includes('tailwindcss')) {
			tailwindImport = atRule;
		}
	});
	return tailwindImport;
}

function transformAppCss(code: string, theme: Theme) {
	code = transformStylesheet(code).code;
	const root = parse(code);
	const nodes: Node[] = [];
	nodes.push(
		atRule({
			name: 'import',
			params: '"@skeletonlabs/skeleton"',
		}),
	);
	nodes.push(
		atRule({
			name: 'import',
			params: '"@skeletonlabs/skeleton/optional/presets"',
		}),
	);
	switch (theme.type) {
		case 'preset': {
			nodes.push(
				atRule({
					name: 'import',
					params: `"@skeletonlabs/skeleton/themes/${theme.value}"`,
				}),
			);
			break;
		}
		case 'custom': {
			nodes.push(comment({ text: `Add your theme import for your theme: "${theme.value}" here` }));
			break;
		}
	}
	const tailwindImport = getTailwindImport(root);
	if (tailwindImport) {
		root.insertAfter(tailwindImport, nodes);
	} else {
		root.prepend(nodes);
	}
	return {
		code: root.toString(),
	};
}

export { transformAppCss };
