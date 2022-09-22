import { sveltekit } from '@sveltejs/kit/vite';
import { configDefaults } from 'vitest/config';
import path from 'path';

// Import package.json version
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit({ hot: !process.env.VITEST })],
	define: {
		__PACKAGE__: pkg
	},
	resolve: {
		alias: {
			'@brainandbones/skeleton': path.resolve('./src/lib/index.ts'),
			$docs: path.resolve('./src/docs')
		}
	},
	test: {
		globals: true,
		environment: 'jsdom',
		exclude: [...configDefaults.exclude, '**/package/**', '**/build/**']
	}
};

export default config;
