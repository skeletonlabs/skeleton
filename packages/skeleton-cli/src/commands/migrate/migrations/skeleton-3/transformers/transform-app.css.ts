import { atRule, comment, parse, Node, Root, AtRule } from 'postcss';
import type { Theme } from '../utility/types';

function getTailwindImport(root: Root) {
	let tailwindImport: AtRule | null = null;
	root.walkAtRules('import', (atRule) => {
		if (atRule.params.includes('tailwindcss')) {
			tailwindImport = atRule;
		}
	});
	return tailwindImport;
}

function transformAppCss(code: string, theme: Theme) {
	const root = parse(code);
	const nodes: Node[] = [];
	nodes.push(
		atRule({
			name: 'import',
			params: '"@skeletonlabs/skeleton"'
		})
	);
	switch (theme.type) {
		case 'preset':
			nodes.push(
				atRule({
					name: 'import',
					params: `"@skeletonlabs/skeleton/themes/${theme.value}"`
				})
			);
			break;
		case 'custom':
			nodes.push(comment({ text: `Add your theme import for your theme: "${theme.value}" here` }));
			break;
	}
	const tailwindImport = getTailwindImport(root);
	if (tailwindImport) {
		root.insertAfter(tailwindImport, nodes);
	} else {
		root.prepend(nodes);
	}
	return {
		code: root.toString()
	};
}

export { transformAppCss };
