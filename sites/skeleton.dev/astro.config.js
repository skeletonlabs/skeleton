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
				// import ApiTable from '@components/docs/ApiTable.astro';
				'@components/docs/ApiTable.astro',
				// import Anatomy from '@components/docs/Anatomy.astro';
				'@components/docs/Anatomy.astro',
				{
					// import componentSet from "@components/mdx/index";
					'@components/mdx/index': [['default', 'componentSet']],
					// import { Icon } from 'astro-icon/components';
					'astro-icon/components': ['Icon'],
					// import { Code } from 'astro-expressive-code/components';
					'astro-expressive-code/components': ['Code'],
					// import { Preview } from '@components/docs/Preview.tsx';
					'@components/docs/Preview.tsx': ['Preview'],
					// import { FrameworkTabs } from '@components/docs/FrameworkTabs';
					'@components/docs/FrameworkTabs.tsx': ['FrameworkTabs'],
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
