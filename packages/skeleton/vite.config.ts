import { sveltekit } from '@sveltejs/kit/vite';
import { configDefaults, type UserConfig } from 'vitest/config';
import { svelteTesting } from '@testing-library/svelte/vite';

/** @type {import('vite').UserConfig} */
const config: UserConfig = {
	plugins: [sveltekit(), svelteTesting()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./vitest-setup.ts'],
		exclude: [...configDefaults.exclude, '**/package/**', '**/build/**']
	},
	server: {
		port: 9090
	}
};

export default config;
