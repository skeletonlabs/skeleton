import { defineConfig } from 'vite';
import fg from 'fast-glob';

export default defineConfig({
	css
	build: {
		cssCodeSplit: true,
		cssMinify: false,
		lib: {
			entry: ['src/core/index.css', ...(await fg.glob('./src/themes/*.css'))]
		},
		rollupOptions: {
			output: {
				preserveModules: true
			}
		}
	},
});
