import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import skeleton from '../../packages/plugin/src/tailwind/skeleton.js';

const SKELETON_PATH = '../../packages/skeleton/src/lib';
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', `${SKELETON_PATH}/**/*.{html,js,svelte,ts}`],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [forms, typography, ...skeleton()]
};
