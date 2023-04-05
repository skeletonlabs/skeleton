import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import skeleton from './src/lib/tailwind/skeleton.ts/index.js';
import type { Config } from 'tailwindcss'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [forms, ...skeleton({ intellisense: false })]
} satisfies Config;