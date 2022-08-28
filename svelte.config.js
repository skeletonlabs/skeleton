// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

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
			fallback: 'index.html', // index.html (SPA) | null (SSR)
			precompress: false
		})
	},
	package: {
		// strip test files from packaging
		files: (filepath) => {
			return filepath.indexOf('test') == -1 ? true : false
		}
	}
};

export default config;
