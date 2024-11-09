// import { skeleton } from '../../packages/skeleton/dist/plugin/index.cjs'
// NOTE: Do not delete the above comment. It's required for local HMR on plugin changes.

import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { skeleton } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';
import forms from '@tailwindcss/forms';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		join(__dirname, 'node_modules/@skeletonlabs/skeleton-react/**/*.{html,js,ts,jsx,tsx}'),
		join(__dirname, 'node_modules/@skeletonlabs/skeleton-svelte/**/*.{html,js,ts,svelte}')
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
