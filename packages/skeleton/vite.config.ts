import { globSync } from 'node:fs';
import { defineConfig } from 'vite';

export default defineConfig({
	logLevel: 'error',
	build: {
		cssCodeSplit: true,
		emptyOutDir: false,
		lib: {
			formats: ['es'],
			entry: ['src/index.css', ...globSync('src/themes/*.css')],
		},
	},
});
