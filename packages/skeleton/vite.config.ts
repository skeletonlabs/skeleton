import { defineConfig } from 'vite';
import fg from 'fast-glob';

export default defineConfig({
	build: {
		cssCodeSplit: true,
		cssMinify: false,
		lib: {
			entry: ['./src/index.scss', ...(await fg.glob('./src/themes/*.scss'))]
		},
		rollupOptions: {
			output: {
				preserveModules: true
			}
		}
	}
});
