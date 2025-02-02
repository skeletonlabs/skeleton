import { defineConfig } from 'vite';
import fg from 'fast-glob';
import { basename } from 'path';
import { extname } from 'node:path';

export default defineConfig({
	build: {
		cssCodeSplit: true,
		lib: {
			entry: {
				['index']: 'src/index.css',
				...(await fg.glob('./src/themes/**/*.{css,scss}')).reduce(
					(entries, input) => {
						Object.assign(entries, {
							[`themes/${basename(input, extname(input))}`]: input
						});
						return entries;
					},
					{} as Record<string, string>
				)
			}
		}
	}
});
