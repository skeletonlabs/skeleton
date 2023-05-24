module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs', '.temp/**/*'],
	overrides: [
		{ files: ['*.svelte'], processor: 'svelte3/svelte3' },
		{ files: ['*.test.ts'], rules: { '@typescript-eslint/no-restricted-imports': ['off'], 'no-restricted-imports': ['off'] } }
	],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'no-restricted-imports': 'off',
		'@typescript-eslint/no-restricted-imports': [
			'error',
			{ patterns: [{ group: ['$lib/*', '$lib', '!./*', '!../*'], message: 'Please only use RELATIVE import paths instead.' }] }
		]
	}
};
