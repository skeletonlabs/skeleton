const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('./src/lib/tailwind/theme.cjs'),
		// FOR TESTING ONLY, NOT READY FOR PRODUCTION USE:
		// require('./src/lib/tailwind/typography.cjs')
	]
};
