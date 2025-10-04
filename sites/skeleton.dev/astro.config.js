import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import svelte, { vitePreprocess } from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'astro-auto-import';
import expressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import { pagefind } from 'vite-plugin-pagefind';

export default defineConfig({
	integrations: [
		partytown(),
		svelte({
			preprocess: vitePreprocess(),
			compilerOptions: {
				experimental: {
					async: true,
				},
			},
		}),
		react({
			experimentalReactChildren: true,
		}),
		expressiveCode({
			defaultProps: { wrap: true },
			themes: ['dark-plus', 'github-dark'],
		}),
		icon({
			include: {
				iconDir: ['src/icons'],
			},
		}),
		AutoImport({
			imports: [
				{
					'astro-icon/components': ['Icon'],
					'astro-expressive-code/components': ['Code'],
					'@/components/docs/api-table.astro': [['default', 'ApiTable']],
					'@/components/docs/anatomy.astro': [['default', 'Anatomy']],
					'@/components/docs/preview.tsx': [['default', 'Preview']],
					'@/components/docs/framework-tabs.tsx': [['default', 'FrameworkTabs']],
				},
			],
		}),
		/**
		 * Note: Keep this as the last integration so that framework components are available in MDX.
		 */
		mdx(),
	],
	vite: {
		plugins: [
			// https://tailwindcss.com/docs/installation/framework-guides/astro
			tailwindcss(),
			// https://github.com/Hugos68/vite-plugin-pagefind
			pagefind({
				outputDirectory: 'dist',
			}),
		],
	},
});
