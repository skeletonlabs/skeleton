import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	logLevel: 'error',
	plugins: [
		svelte({
			preprocess: vitePreprocess(),
		}),
		svelteTesting(),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	test: {
		environment: 'jsdom',
		setupFiles: './test/setup.ts',
	},
});
