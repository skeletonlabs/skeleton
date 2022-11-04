import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { fileURLToPath } from 'url';
import * as path from 'path';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = defineConfig({
	extensions: ['.md'],

	smartypants: {
		dashes: 'oldschool'
	},
	// layout: {
	// 	blog: path.join(dirname, './src/routes/(blog)/+layout.svelte')
	// },
	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
