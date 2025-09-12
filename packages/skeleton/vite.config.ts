import { defineConfig } from 'vite';
import { basename, dirname, join } from 'node:path';
import { glob } from 'tinyglobby';

export default defineConfig({
	logLevel: 'silent',
	build: {
		cssCodeSplit: true,
		cssMinify: false,
		emptyOutDir: false,
		lib: {
			entry: {
				['index']: 'src/index.css',
				...Object.fromEntries(
					(await glob('./src/themes/*.{css,scss}')).map((path) => {
						const directory = basename(dirname(path));
						const filename = basename(path);
						return [join(directory, filename), path];
					})
				)
			}
		}
	}
});
