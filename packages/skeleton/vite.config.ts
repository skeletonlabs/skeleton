import { defineConfig } from 'vite';
import fg from 'fast-glob';

export default defineConfig({
	build: {
		cssCodeSplit: true,
		cssMinify: false,
		lib: {
			entry: ['./src/index.css', ...(await fg.glob('./src/themes/*.{css,scss}'))]
		},
		rollupOptions: {
			output: {
				preserveModules: true
			}
		}
	}
});
