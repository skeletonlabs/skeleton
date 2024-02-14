import { skeleton } from "@skeletonlabs/skeleton/plugin";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		skeleton({
			themes: {
				preset: [
					{ name: "next" },
				],
			},
		}),
	],
}

