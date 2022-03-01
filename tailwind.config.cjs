const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [
		require('./src/utils/colors.cjs')
	]
};
