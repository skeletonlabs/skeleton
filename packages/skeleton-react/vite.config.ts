import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		}
	},
	test: {
		setupFiles: './test/setup.ts',
		globals: true,
		environment: 'jsdom'
	}
});
