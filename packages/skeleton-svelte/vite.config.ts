import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import skeletonPluginWatcher from 'vite-plugin-tw-plugin-watcher';

import path from 'node:path';

export default defineConfig({
	plugins: [
		// NOTE: confirmed the following with @CokaKola on the Skeleton Discord after the Vite 6 upgrade:
		// There is a known Vitest issue where they reverted their peer dep of vite 6 so the types are now mismatched.
		// He advised reverting back to Vitest 2.1.6 or adding an ignore comment, with emphasis on the latter.
		// @ts-expect-error due to vitest peer dependency issue per Vite 6 update
		sveltekit(),
		// @ts-expect-error due to vitest peer dependency issue per Vite 6 update
		svelteTesting(),
		skeletonPluginWatcher(path.resolve(path.join('..', '..', 'packages', 'skeleton', 'src', 'plugin')))
	],
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.js'],
		exclude: ['node_modules/**', '.svelte-kit/**', 'dist/**']
	}
});
