import { defineConfig } from 'vite';
import fg from 'fast-glob';
import { basename, extname } from 'node:path';

export default defineConfig({
	build: {
		cssCodeSplit: true,
		lib: {
			entry: {
				['core/index']: 'src/core/index.css',
				...(await fg.glob('./src/themes/*.{css,scss}')).reduce(
					(entries, input) => {
						Object.assign(entries, {
							[`themes/${basename(input)}`]: input
						});
						return entries;
					},
					{} as Record<string, string>
				)
			}
		}
	}
});
