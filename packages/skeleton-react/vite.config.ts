import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig, type Plugin } from 'vitest/config';
import { join } from 'node:path';

export default defineConfig({
	plugins: [react() as unknown as Plugin],
	test: {
		dir: join(import.meta.dirname, 'test'),
		pool: 'threads',
		browser: {
			enabled: true,
			provider: playwright(),
			headless: true,
			screenshotFailures: false,
			instances: [{ browser: 'chromium' }],
		},
	},
});
