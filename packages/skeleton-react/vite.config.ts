import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';
import { join } from 'node:path';

export default defineConfig({
	plugins: [react()],
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
