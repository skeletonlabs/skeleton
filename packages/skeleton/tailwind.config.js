import { skeleton } from '../../packages/plugin/dist/index.js';

/** @type {import("tailwindcss").Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [skeleton]
};
