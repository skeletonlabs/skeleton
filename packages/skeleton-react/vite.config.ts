import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react() as unknown as any],
	test: {
		setupFiles: './test/setup.ts',
		globals: true,
		environment: 'jsdom',
	},
});
