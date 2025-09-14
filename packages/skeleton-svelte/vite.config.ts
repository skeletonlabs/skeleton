import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import { resolve } from 'node:path';

export default defineConfig({
	plugins: [svelte(), svelteTesting()],
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
