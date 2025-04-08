import { atRule, comment, parse, Node, Root, AtRule } from 'postcss';
import type { Theme } from '../utility/types';
import { transformStyleSheet } from './transform-stylesheet';

function getTailwindImport(root: Root) {
	let tailwindImport: AtRule | undefined;
	root.walkAtRules('import', (atRule) => {
		if (atRule.params.includes('tailwindcss')) {
			tailwindImport = atRule;
		}
	});
	return tailwindImport;
}

function transformAppCss(code: string, theme: Theme, addAtSource: boolean) {
	code = transformStyleSheet(code).code;
	const root = parse(code);
	const nodes: Node[] = [];
	nodes.push(
		atRule({
			name: 'import',
			params: '"@skeletonlabs/skeleton"'
		})
	);
	nodes.push(
		atRule({
			name: 'import',
			params: '"@skeletonlabs/skeleton/optional/presets"'
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
	if (addAtSource) {
		nodes.push(
			atRule({
				name: 'source',
				params: '"../node_modules/@skeletonlabs/skeleton-svelte/dist"'
			})
		);
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
