import javascript from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import typescript from 'typescript-eslint';

export default defineConfig(
	globalIgnores([
		'**/node_modules/',
		'**/dist/',
		'**/build/',
		'**/pagefind/',
		'**/.svelte-kit/',
		'**/.astro/',
		'**/.next/',
		'**/.vercel/',
		'**/next-env.d.ts',
	]),
	prettier,
	javascript.configs.recommended,
	typescript.configs.recommended,
	svelte.configs.recommended,
	astro.configs.recommended,
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				parser: typescript.parser,
			},
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ['**/*.jsx', '**/*.tsx'],
		...react.configs.flat.recommended,
		...react.configs.flat['jsx-runtime'],
		...reactRefresh.configs.recommended,
	},
	{
		plugins: {
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			'simple-import-sort/imports': 'warn',
			'simple-import-sort/exports': 'warn',
		},
	},
);
