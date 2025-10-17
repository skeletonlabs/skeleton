import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import transformLucideImports from 'vite-plugin-transform-lucide-imports';

export default defineConfig({
	output: 'server',
	site: `https://${process.env.VERCEL_ENV === 'production' ? process.env.VERCEL_PROJECT_PRODUCTION_URL : process.env.VERCEL_URL}`,
	markdown: {
		syntaxHighlight: false,
	},
	integrations: [
		react(),
		svelte({
			compilerOptions: {
				experimental: {
					async: true,
				},
			},
		}),
		mdx(),
		sitemap(),
		partytown(),
	],
	vite: {
		plugins: [
			/* @ts-expect-error vite version mismatch */
			transformLucideImports({
				onwarn(warning, defaultHandler) {
					if (warning.message.match(/Skipping optimization of (\S+) because \1 is already a tree shaken package/)) {
						return;
					}
					defaultHandler(warning.message);
				},
			}),
			/* @ts-expect-error vite version mismatch */
			tailwindcss(),
		],
	},
	adapter: vercel(),
});
