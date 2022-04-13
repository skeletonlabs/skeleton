// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
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
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback:'index.html', // index.html (SPA) | null (SSR)
			precompress: false
		}),
		vite: {
			test: {
				exclude: [...configDefaults.exclude, './package', './build']
			}
		}
	}
};

export default config;
