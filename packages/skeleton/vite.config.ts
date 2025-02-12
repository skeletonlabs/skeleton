import { defineConfig } from 'vite';
import fg from 'fast-glob';
import { basename } from 'node:path';

export default defineConfig({
	build: {
		cssCodeSplit: true,
		cssMinify: false,
		emptyOutDir: false,
		lib: {
			entry: {
				['index']: 'src/index.css',
				...Object.fromEntries((await fg.glob('./src/themes/*.{css,scss}')).map((path) => [`themes/${basename(path)}`, path])),
				...Object.fromEntries((await fg.glob('./src/optional/*.{css,scss}')).map((path) => [`optional/${basename(path)}`, path]))
			}
		}
	},
	plugins: [
		{
			name: 'custom-plugin',
			configResolved(config) {
				console.log(config.build.lib);
			}
		}
	]
});
