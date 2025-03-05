import javascript from '@eslint/js';
import typescript from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import svelte from 'eslint-plugin-svelte';
import react from 'eslint-plugin-react';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier/recommended';

/**
 * @see https://eslint.org/docs/latest/use/configure/
 * @type {import('eslint').Linter.Config}
 */
export default typescript.config(
	/**
	 * Ignore
	 */
	{
		ignores: ['**/node_modules/', '**/dist/', '**/build/', '**/pagefind/', '**/.svelte-kit/', '**/.astro/', '**/.next/', '**/.vercel/']
	},
	/**
	 * Prettier
	 */
	prettier,
	/**
	 * Javascript
	 */
	javascript.configs.recommended,
	/**
	 * Typescript
	 */
	typescript.configs.recommended,
	/**
	 * Astro
	 */
	astro.configs.recommended,
	/**
	 * Svelte
	 */
	svelte.configs['flat/recommended'],
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				extraFileExtensions: ['.svelte'],
				parser: typescript.parser
			},
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		// Disabled temporarily while we communiticate this issue upstream to Zag.
		// Zag does not not readily provide keys for for Svelte as they do React.
		rules: {
			'svelte/require-each-key': 'off'
		}
	},
	/**
	 * React
	 */
	{
		files: ['**/*.tsx', '**/*.jsx'],
		...react.configs.flat.recommended,
		...react.configs.flat['jsx-runtime']
	}
);
