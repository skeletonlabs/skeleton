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
		exclude: [...configDefaults.exclude, '**/package/**', '**/build/**'],
		setupFiles: [
			// https://stackoverflow.com/questions/73831370/vitest-crypto-randomuuid-is-not-a-function
			'./scripts/vitest-global-setup.js'
		]
	}
};

export default config;
