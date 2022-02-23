const colors = require('tailwindcss/colors');

const themeDefault = {
	'primary': colors.emerald,
	'accent': colors.indigo,
	'surface': colors.gray,
};
const themeSpeedTrivia = {
	'primary': colors.cyan,
	'accent': colors.fuchsia,
	'surface': colors.indigo,
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
