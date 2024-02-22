// import { skeleton } from '../../packages/skeleton/dist/plugin/index.cjs'
// NOTE: do not delete the above comment. It's required for local HMR on plugin changes.

import { skeleton } from "@skeletonlabs/skeleton/plugin";
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config}*/
const config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		forms,
		skeleton({
			themes: {
				preset: [
					{ name: "next" },
				],
			},
		}),
	]
};

module.exports = config;
