const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter', ...defaultTheme.fontFamily.sans],
			},
		}
	},
	plugins: [
		// Utilize our Skeleton Tailwind plugin
		require('./src/lib/tailwind.cjs')
	]
};
