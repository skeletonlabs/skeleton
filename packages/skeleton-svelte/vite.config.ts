import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [tailwindcss(), svelte(), svelteTesting()],
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.js'],
		exclude: ['node_modules/**', '.svelte-kit/**', 'dist/**'],
	},
});
