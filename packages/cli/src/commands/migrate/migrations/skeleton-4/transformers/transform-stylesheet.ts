import { log } from '@clack/prompts';
import { AtRule, parse } from 'postcss';

export function transformStylesheet(content: string) {
	try {
		const ast = parse(content);

		ast.walkAtRules((atRule) => {
			if (atRule.name === 'import' && atRule.params.includes('@skeletonlabs/skeleton/optional/presets')) {
				atRule.remove();
			}
			if (atRule.name === 'source') {
				if (atRule.params.includes('@skeletonlabs/skeleton-svelte')) {
					atRule.replaceWith(
						new AtRule({
							name: 'import',
							params: `'@skeletonlabs/skeleton-svelte'`,
						}),
					);
				}
				if (atRule.params.includes('@skeletonlabs/skeleton-react')) {
					atRule.replaceWith(
						new AtRule({
							name: 'import',
							params: `'@skeletonlabs/skeleton-react'`,
						}),
					);
				}
			}
		});

		return {
			code: ast.toString(),
		};
	} catch (error) {
		log.warn(`Failed to parse CSS, skipping transformation: ${error instanceof Error ? error.message : 'Unknown error'}`);
		return {
			code: content,
		};
	}
}
