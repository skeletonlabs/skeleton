// import { skeleton } from '../../packages/skeleton/dist/plugin/index.cjs'
// NOTE: Do not delete the above comment. It's required for local HMR on plugin changes.

import { skeleton, contentPath } from '../../packages/skeleton/dist/plugin/index.js';
import * as themes from '@skeletonlabs/skeleton/themes';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		contentPath(import.meta.url, 'svelte'),
		contentPath(import.meta.url, 'react')
	],
	theme: {
		extend: {}
	},
	plugins: [
		forms,
		skeleton({
			themes: Object.values(themes) // All available themes
		})
	]
};
