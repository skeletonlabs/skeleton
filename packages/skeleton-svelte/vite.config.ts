import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	logLevel: 'error',
	plugins: [svelte(), svelteTesting()],
	test: {
		environment: 'jsdom',
		setupFiles: './test/setup.ts',
	},
});
