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
	site: `https://${process.env.VERCEL_URL}`,
	adapter: vercel(),
	integrations: [
		react(),
		svelte({
			compilerOptions: {
				experimental: {
					async: true,
				},
			},
		}),
		mdx({
			optimize: true,
		}),
		sitemap(),
		partytown(),
		pagefind(),
	],
	vite: {
		// @ts-expect-error Vite version mismatch
		plugins: [tailwindcss()],
	},
});
