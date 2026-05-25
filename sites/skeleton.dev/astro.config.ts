import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import autoImport from 'astro-auto-import';
import pagefind from 'astro-pagefind';
import { defineConfig, envField } from 'astro/config';
import { execSync } from 'node:child_process';

export default defineConfig({
	site: import.meta.env.DEV
		? 'http://localhost:4321'
		: process.env.VERCEL_ENV === 'production'
			? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
			: `https://${process.env.VERCEL_URL}`,
	prefetch: true,
	trailingSlash: 'never',
	markdown: {
		syntaxHighlight: false,
	},
	integrations: [
		react(),
		svelte(),
		autoImport({
			imports: [
				{
					'./src/components/ui/framework.astro': [['default', 'Framework']],
					'./src/components/ui/api-reference.astro': [['default', 'ApiReference']],
					'./src/components/ui/preview.svelte': [['default', 'Preview']],
					'./src/components/ui/alert.astro': [['default', 'Alert']],
				},
			],
		}),
		mdx(),
		partytown(),
		sitemap(),
		pagefind(),
	],
	env: {
		schema: {
			GIT_BRANCH: envField.string({
				context: 'server',
				access: 'public',
				default: process.env.VERCEL_GIT_COMMIT_REF ?? execSync('git rev-parse --abbrev-ref HEAD').toString().trim(),
			}),
		},
	},
	vite: {
		build: {
			rollupOptions: {
				external: ['/pagefind/pagefind.js'],
			},
		},
		assetsInclude: '**/pagefind.js',
		// "fixes" the `excessive stack depth` error
		plugins: [tailwindcss() as unknown as any],
	},
	adapter: vercel(),
});
