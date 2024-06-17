/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	env: {
		es2020: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	overrides: [
		{
			files: ['*.svelte'],
			extends: ['plugin:svelte/recommended', 'plugin:svelte/prettier'],
			env: {
				browser: true
			},
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			},
			plugins: ['svelte'],
			rules: {
				'svelte/no-at-html-tags': 'off',
				'svelte/valid-compile': 'off'
			}
		},
		{
			files: ['*.tsx'],
			env: {
				browser: true,
				node: false
			},
			extends: ['plugin:jsx-a11y/recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			},
			plugins: ['jsx-a11y', 'react', 'react-compiler', 'react-hooks', 'react-refresh'],
			rules: {
				'react-compiler/react-compiler': 'error',
				'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
			},
			settings: {
				react: {
					version: 'detect'
				}
			}
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint'],
	reportUnusedDisableDirectives: true,
	rules: {
		'no-empty-function': 'off',
		'no-useless-escape': 'off',
		'@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_'
			}
		]
	}
};
