import { skeleton } from "@skeletonlabs/skeleton-next/plugin";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [
		skeleton({
			themes: {
				preset: [
					{ name: "crimson", enhancements: true },
					{ name: "gold-nouveau", enhancements: true },
					{ name: "hamlindigo", enhancements: true },
					{ name: "modern", enhancements: true },
					{ name: "rocket", enhancements: true },
					{ name: "sahara", enhancements: true },
					{ name: "seafoam", enhancements: true },
					{ name: "skeleton", enhancements: true },
					{ name: "vintage", enhancements: true },
					{ name: "wintry", enhancements: true },
				],
			},
		}),
	],
};
