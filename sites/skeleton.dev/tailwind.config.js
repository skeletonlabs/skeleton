// @ts-check
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

// Must be imported directly so that the tailwind extension can detect file changes
import skeleton from '../../packages/plugin/dist/index.js';

const SKELETON_PATH = '../../packages/skeleton/src/lib';

/** @type {import('tailwindcss').Config} */
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
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{ name: 'crimson', extras: true },
					{ name: 'gold-nouveau', extras: true },
					{ name: 'hamlindigo', extras: true },
					{ name: 'modern', extras: true },
					{ name: 'rocket', extras: true },
					{ name: 'sahara', extras: true },
					{ name: 'seafoam', extras: true },
					{ name: 'skeleton', extras: true },
					{ name: 'vintage', extras: true }
				]
			}
		})
	]
};
