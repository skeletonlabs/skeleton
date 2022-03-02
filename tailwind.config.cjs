const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [
		// Utilize our Skeleton Tailwind plugin
		require('./src/lib/tailwind.cjs')
	]
};
