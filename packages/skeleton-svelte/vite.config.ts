import { svelte } from '@sveltejs/vite-plugin-svelte';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig, type Plugin } from 'vitest/config';
import { join } from 'node:path';

export default defineConfig({
	plugins: [svelte() as unknown as Plugin],
	test: {
		dir: join(import.meta.dirname, 'test'),
		browser: {
			enabled: true,
			provider: playwright(),
			headless: true,
			screenshotFailures: false,
			instances: [{ browser: 'chromium' }],
		},
	},
});
