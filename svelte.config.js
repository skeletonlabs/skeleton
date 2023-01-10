import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

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
		// https://kit.svelte.dev/docs/configuration#alias
		alias: {
			'@skeletonlabs/skeleton': path.resolve('./src/lib/index.ts'),
			$docs: path.resolve('./src/docs')
		}
	},
	package: {
		// strip test files from packaging
		files: (filepath) => {
			return filepath.indexOf('test') == -1 ? true : false;
		}
	}
};

export default config;
