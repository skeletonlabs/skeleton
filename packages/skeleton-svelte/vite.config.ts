import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import skeletonPluginWatcher from 'vite-plugin-tw-plugin-watcher';
import { resolve, join } from 'node:path';

export default defineConfig({
	plugins: [sveltekit(), svelteTesting(), skeletonPluginWatcher(resolve(join('..', '..', 'packages', 'skeleton', 'src', 'plugin')))],
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.ts'],
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
