import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { configDefaults } from 'vitest/config'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		vite: {
			test: {
				exclude: [...configDefaults.exclude, './package', './build']
			}
		}
	}
};

export default config;
