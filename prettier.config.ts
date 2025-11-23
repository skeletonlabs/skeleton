import type { Config } from 'prettier';

export default {
	plugins: ['prettier-plugin-astro', 'prettier-plugin-svelte', '@trivago/prettier-plugin-sort-imports', '@prettier/plugin-oxc'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
			},
		},
	],
	printWidth: 140,
	singleQuote: true,
	useTabs: true,
} satisfies Config;
