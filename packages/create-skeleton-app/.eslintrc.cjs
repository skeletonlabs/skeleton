module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	ignorePatterns: ['*.cjs'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	rules: {
		'no-useless-escape': 'off',
	},
	env: {
		browser: false,
		es2017: true,
		node: true,
	},
};
