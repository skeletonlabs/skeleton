import sdk from '@stackblitz/sdk';

const appCss = `
@import "tailwindcss";
@import "@skeletonlabs/skeleton";
@import "@skeletonlabs/skeleton-svelte";
@import "@skeletonlabs/skeleton/themes/cerberus";
`.trim();

const mainTs = `
import { mount } from 'svelte'
import './app.css'
import App from './app.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
`.trim();

const indexHtml = `
<!doctype html>
<html lang="en" data-theme="cerberus">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`.trim();

const packageJson = JSON.stringify(
	{
		name: 'skeleton-svelte',
		scripts: {
			dev: 'vite',
		},
		devDependencies: {
			'@faker-js/faker': '^10',
			'@skeletonlabs/skeleton': '^4',
			'@skeletonlabs/skeleton-svelte': '^4',
			'@sveltejs/vite-plugin-svelte': '^6',
			'@tailwindcss/vite': '^4',
			'@tsconfig/svelte': '^5',
			'@lucide/svelte': '^0',
			svelte: '^5',
			tailwindcss: '^4',
			typescript: '^5',
			vite: '^7',
		},
		type: 'module',
	},
	null,
	2,
);

const svelteConfigJs = `
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
export default {
  preprocess: vitePreprocess(),
}
`.trim();

const tsconfigJson = JSON.stringify(
	{
		extends: '@tsconfig/svelte/tsconfig.json',
		compilerOptions: {
			target: 'ES2022',
			useDefineForClassFields: true,
			module: 'ESNext',
			types: ['svelte', 'vite/client'],
			noEmit: true,
			allowJs: true,
			checkJs: true,
			moduleDetection: 'force',
		},
		include: ['src'],
	},
	null,
	2,
);

const viteConfigTs = `
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [tailwindcss(), svelte()],
})
`.trim();

export function openSvelteStackblitzProject(files: Record<string, string>) {
	const srcFiles = Object.fromEntries(Object.entries(files).map(([key, value]) => [`src/${key}`, value]));

	sdk.openProject(
		{
			title: 'Skeleton Svelte',
			template: 'node',
			files: {
				'src/app.css': appCss,
				'src/main.ts': mainTs,
				...srcFiles,
				'index.html': indexHtml,
				'package.json': packageJson,
				'svelte.config.js': svelteConfigJs,
				'tsconfig.json': tsconfigJson,
				'vite.config.ts': viteConfigTs,
			},
		},
		{
			openFile: Object.keys(srcFiles).at(0),
			showSidebar: false,
		},
	);
}
