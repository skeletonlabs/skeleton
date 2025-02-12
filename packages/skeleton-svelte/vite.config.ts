import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [sveltekit(), svelteTesting(), tailwindcss()],
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.js'],
		exclude: ['node_modules/**', '.svelte-kit/**', 'dist/**']
	}
});
