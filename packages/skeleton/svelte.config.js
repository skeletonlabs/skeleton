import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		vitePreprocess({
			style: {
				css: {
					postcss: join(__dirname, 'postcss.config.cjs')
				}
			}
		})
	],
	compilerOptions: { accessors: process.env.TEST },
	kit: {
		adapter: adapter()
	}
};

export default config;
