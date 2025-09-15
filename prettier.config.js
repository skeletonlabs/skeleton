/**
 * @see https://prettier.io/docs/options
 * @type {import('prettier').Config}
 */
export default {
	plugins: ['prettier-plugin-astro', 'prettier-plugin-svelte', '@trivago/prettier-plugin-sort-imports'],
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
};
