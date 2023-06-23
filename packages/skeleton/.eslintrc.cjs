module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:svelte/prettier', 'prettier'],
	plugins: ['@typescript-eslint'],
	ignorePatterns: ['*.cjs', '.temp/**/*'],
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		},
		{ files: ['*.test.ts'], rules: { '@typescript-eslint/no-restricted-imports': ['off'], 'no-restricted-imports': ['off'] } }
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	globals: { $$Generic: 'readable' },
	rules: {
		'svelte/no-at-html-tags': 'off',

		'no-restricted-imports': 'off',
		'@typescript-eslint/no-restricted-imports': [
			'error',
			{ patterns: [{ group: ['$lib/*', '$lib', '!./*', '!../*'], message: 'Please only use RELATIVE import paths instead.' }] }
		],

		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],

		'@typescript-eslint/ban-types': ['error', { types: { '{}': false }, extendDefaults: true }]
	}
};
