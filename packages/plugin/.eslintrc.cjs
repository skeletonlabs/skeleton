module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['@typescript-eslint'],
	ignorePatterns: ['*.cjs', '.temp/**/*'],
	overrides: [],
	env: {
		es2017: true,
		node: true
	},
	rules: {
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }]
	}
};
