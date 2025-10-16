import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import pagefind from 'astro-pagefind';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: `https://${process.env.VERCEL_ENV === 'production' ? process.env.VERCEL_PROJECT_PRODUCTION_URL : process.env.VERCEL_URL}`,
	adapter: vercel(),
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
		pagefind(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
