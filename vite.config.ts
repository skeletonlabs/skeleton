import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import sveld from 'vite-plugin-sveld';

// Import package.json version
import { readFileSync } from 'fs';
const json = readFileSync('package.json', 'utf8');
const pkg = JSON.parse(json);

/** @type {import('vite').UserConfig} */
const config: UserConfig = {
	plugins: [sveltekit(), sveld()],
	define: {
		__PACKAGE__: pkg
	},
	test: {
		globals: true,
		environment: 'jsdom',
		exclude: [...configDefaults.exclude, '**/package/**', '**/build/**']
	}
};

export default config;
