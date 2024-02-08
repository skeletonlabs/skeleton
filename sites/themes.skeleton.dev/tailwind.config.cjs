import { skeleton } from "@skeletonlabs/skeleton/plugin";
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config}*/
const config = {
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
