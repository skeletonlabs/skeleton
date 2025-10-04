import mdx from '@astrojs/mdx';
// Integrations
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import svelte, { vitePreprocess } from '@astrojs/svelte';
// Vite Plugins
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'astro-auto-import';
import expressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import { pagefind } from 'vite-plugin-pagefind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		// https://docs.astro.build/en/guides/integrations-guide/partytown/
		partytown(),
		// https://docs.astro.build/en/guides/integrations-guide/svelte/
		svelte({
			preprocess: vitePreprocess(),
			compilerOptions: {
				experimental: {
					async: true,
				},
			},
		}),
		// https://docs.astro.build/en/guides/integrations-guide/react/
		react({
			experimentalReactChildren: true,
		}),
		// https://expressive-code.com/
		expressiveCode({
			defaultProps: { wrap: true },
			themes: ['dark-plus', 'github-dark'],
		}),
		// https://www.astroicon.dev/
		icon({
			include: {
				iconDir: ['src/icons'],
			},
		}),
		// https://github.com/delucis/astro-auto-import/tree/main/packages/astro-auto-import
		AutoImport({
			imports: [
				'@/components/docs/api-table.astro',
				'@/components/docs/anatomy.astro',
				{
					'astro-icon/components': ['Icon'],
					'astro-expressive-code/components': ['Code'],
					'@/components/docs/preview.tsx': ['Preview'],
					'@/components/docs/framework-tabs.tsx': ['FrameworkTabs'],
				},
			],
		}),
		// IMPORTANT: MUST BE LAST INTEGRATION
		// https://docs.astro.build/en/guides/integrations-guide/mdx/
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
