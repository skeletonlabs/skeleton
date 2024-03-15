// @ts-check
// import { skeleton } from '../../packages/skeleton/dist/plugin/index.cjs'
// NOTE: do not delete the above comment. It's required for local HMR on plugin changes.

import { join } from 'path';
import { skeleton } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		join(require.resolve('@skeletonlabs/skeleton-react'), '../**/*.{html,js,ts,jsx,tsx}'),
		join(require.resolve('@skeletonlabs/skeleton-svelte'), '../**/*.{html,js,ts,svelte}'),
	],
	theme: {
		extend: {},
	},
	plugins: [
		forms,
		// typography,
		skeleton({
			themes: [themes.catppuccin, themes.cerberus, themes.pine, themes.rose],
		}),
	],
};
