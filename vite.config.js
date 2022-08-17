import { sveltekit } from '@sveltejs/kit/vite';
import { configDefaults } from 'vitest/config';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		exclude: [...configDefaults.exclude, '**/package/**', '**/build/**']
		// setupFiles: []
	}
};

export default config;
