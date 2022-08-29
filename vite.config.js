import { sveltekit } from '@sveltejs/kit/vite';
import { configDefaults } from 'vitest/config';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit({ hot: !process.env.VITEST }),
	],
	resolve: {
		alias: {
			'@brainandbones/skeleton': path.resolve('./src/lib/index.ts')
		}
	},
	test: {
		globals: true,
		environment: 'jsdom',
		exclude: [...configDefaults.exclude, '**/package/**', '**/build/**']
	},
};

export default config;
