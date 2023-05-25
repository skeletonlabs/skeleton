const defaultTheme = require('tailwindcss/defaultTheme');

const SKELETON_PATH = '../../packages/skeleton/src/lib';
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', `${SKELETON_PATH}/**/*.{html,js,svelte,ts}`],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		...require(`@skeletonlabs/skeleton/tailwind/skeleton.cjs`)({ intellisense: false })
	]
};
