import { vitePreprocess } from '@astrojs/svelte';

/** @type {Parameters<import('@astrojs/svelte').default>[0]} */
export default {
	preprocess: vitePreprocess(),
	compilerOptions: {
		experimental: {
			async: true,
		},
	},
};
