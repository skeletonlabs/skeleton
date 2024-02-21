import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import skeletonPluginWatcher from 'vite-plugin-tw-plugin-watcher';
import path from 'node:path';

export default defineConfig({
	plugins: [
		sveltekit(),
		skeletonPluginWatcher(
			path.resolve(path.join('..', '..', 'packages', 'skeleton', 'src', 'plugin'))
		)
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
