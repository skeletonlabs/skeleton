import { skeleton } from '@skeletonlabs/skeleton/plugin';

/** @type {import('tailwindcss').Config}*/
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		skeleton({
			themes: {
				preset: [{ name: 'next' }]
			}
		})
	]
};
