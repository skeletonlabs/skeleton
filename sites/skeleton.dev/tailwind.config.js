// @ts-check
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

// Must be imported directly so that the tailwind extension can detect file changes
import { skeleton } from '../../packages/plugin/dist/index.js';

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
					{ name: 'crimson', enhancements: true },
					{ name: 'gold-nouveau', enhancements: true },
					{ name: 'hamlindigo', enhancements: true },
					{ name: 'modern', enhancements: true },
					{ name: 'rocket', enhancements: true },
					{ name: 'sahara', enhancements: true },
					{ name: 'seafoam', enhancements: true },
					{ name: 'skeleton', enhancements: true },
					{ name: 'vintage', enhancements: true }
				]
			}
		})
	]
};
