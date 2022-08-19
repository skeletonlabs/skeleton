import { sveltekit } from '@sveltejs/kit/vite';
import { configDefaults } from 'vitest/config';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		exclude: [...configDefaults.exclude, '**/package/**', '**/build/**']
		// setupFiles: []
	},
	resolve: {
		alias: {
			'@brainandbones/skeleton': path.resolve('./src/lib/index.ts')
		}
	}
};

export default config;
