import { svelte } from '@sveltejs/vite-plugin-svelte';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig, type Plugin } from 'vitest/config';

export default defineConfig({
	plugins: [svelte() as unknown as Plugin],
	optimizeDeps: {
		exclude: ['@zag-js/svelte'],
	},
	test: {
		isolate: false,
		browser: {
			enabled: true,
			provider: playwright(),
			headless: true,
			screenshotFailures: false,
			instances: [{ browser: 'chromium' }],
		},
	},
});
