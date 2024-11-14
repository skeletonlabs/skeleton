import path from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

import skeletonPluginWatcher from 'vite-plugin-tw-plugin-watcher';
import { svelteTesting } from '@testing-library/svelte/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		svelteTesting(),
		skeletonPluginWatcher(path.resolve(path.join('..', '..', 'packages', 'skeleton', 'src', 'plugin')))
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		setupFiles: ['./vitest-setup.js'],
		exclude: [
			'**/node_modules/**',
			'**/tests/**',
			'**/build/**',
			'**/coverage/**',
			'**/.svelte-kit/**',
			'**/src/lib/icons/**',
			'**/.eslintrc.cjs',
			'**/vite.config.ts',
			'**/tailwind.config.ts',
			'**/postcss.config.cjs',
			'**/playwright.config.ts',
			'**/svelte.config.js',
			'**/src/app.d.ts',
			'**/+page.svelte',
			'**/+layout.svelte',
			'**/+error.svelte',
			'**/+page.server.ts',
			'**/hooks.server.ts'
		]
	}
});
