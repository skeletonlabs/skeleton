import { globSync } from 'node:fs';
import { defineConfig } from 'vite';

export default defineConfig({
	logLevel: 'error',
	build: {
		cssCodeSplit: true,
		cssMinify: false,
		emptyOutDir: false,
		lib: {
			formats: ['es'],
			entry: ['src/index.css', ...globSync('src/themes/*.css')],
		},
	},
});
