import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite'
import skeletonPluginWatcher from 'vite-plugin-tw-plugin-watcher';

import path from 'node:path';

export default defineConfig({
	plugins: [sveltekit(), svelteTesting(), skeletonPluginWatcher(path.resolve(path.join('..', '..', 'packages', 'skeleton', 'src', 'plugin')))],
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.js'],
	},
});
