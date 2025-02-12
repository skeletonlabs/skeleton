import { defineConfig } from 'vite';
import fg from 'fast-glob';
import { basename, dirname, join } from 'node:path';

export default defineConfig({
	build: {
		cssCodeSplit: true,
		cssMinify: false,
		emptyOutDir: false,
		lib: {
			entry: {
				['index']: 'src/index.css',
				...Object.fromEntries(
					(await fg.glob('./src/{themes,optional}/*.{css,scss}')).map((path) => {
						const directory = basename(dirname(path));
						const filename = basename(path);
						return [join(directory, filename), path];
					})
				)
			}
		}
	}
});
