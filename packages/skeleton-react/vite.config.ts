import { defineConfig, configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import RemixRouter from 'vite-plugin-remix-router';
import skeletonPluginWatcher from 'vite-plugin-tw-plugin-watcher';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		// @ts-expect-error remove once `vitest` adds `vite@6` as a peer dependency
		react(),
		// https://vite-remix-router.vercel.app/
		RemixRouter(),
		skeletonPluginWatcher(path.resolve(path.join('..', '..', 'packages', 'skeleton', 'src', 'plugin')))
	],
	resolve: {
		alias: {
			$lib: path.resolve(__dirname, './src/lib')
		}
	},
	test: {
		// https://victorbruce82.medium.com/vitest-with-react-testing-library-in-react-created-with-vite-3552f0a9a19a
		environment: 'jsdom',
		globals: true,
		setupFiles: './tests/setup.js',
		exclude: [
			...configDefaults.exclude,
			'**/node_modules/**',
			'**/tests/**',
			'**/build/**',
			'**/coverage/**',
			'**/src/lib/icons/**',
			'**/.eslintrc.cjs',
			'**/vite.config.ts',
			'**/tailwind.config.ts',
			'**/postcss.config.cjs',
			'**/playwright.config.ts'
		]
	}
});
