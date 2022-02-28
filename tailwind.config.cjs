const colors = require('tailwindcss/colors');

const themeDefault = {
	'primary': colors.emerald,
	'accent': colors.indigo,
	'warning': colors.rose,
	'surface': colors.gray,
};
const themeSpeedTrivia = {
	'primary': colors.cyan,
	'accent': colors.indigo,
	'warning': colors.fuchsia,
	'surface': {
		50: '#ffffff',
		100: '#F3F3F3',
		200: '#f8fafc',
		300: '#f1f5f9',
		400: '#e2e8f0',
		500: '#cbd5e1',
		600: '#94a3b8',
		700: '#64748b',
		800: '#475569',
		900: '#334155'
	},
};

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: themeDefault,
		}
	},
	plugins: []
};
