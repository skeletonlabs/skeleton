import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	test: {
		setupFiles: './test/setup.ts',
		globals: true,
		environment: 'jsdom',
	},
});
