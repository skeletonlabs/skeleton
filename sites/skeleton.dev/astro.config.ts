// Astro v6's Environment API causes multiple environments to share a single
// FSWatcher, exceeding Node's default listener limit of 10 during dev.
import { EventEmitter } from 'node:events';
EventEmitter.defaultMaxListeners = 12;

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

function getSite() {
	if (import.meta.env.DEV) {
		return 'http://localhost:4321';
	}
	if (process.env.VERCEL_ENV === 'production') {
		return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
	}
	return `https://${process.env.VERCEL_URL}`;
}

export default defineConfig({
	site: getSite(),
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
			LOAD_COMPONENT_COLLECTION: envField.enum({
				values: ['0', '1'],
				context: 'server',
				access: 'secret',
				default: '0',
			}),
		},
	},
	vite: {
		resolve: {
			noExternal: ['@lucide/svelte'],
		},
		build: {
			rollupOptions: {
				external: ['/pagefind/pagefind.js'],
			},
		},
		assetsInclude: '**/pagefind.js',
		plugins: [tailwindcss()],
	},
	adapter: vercel(),
});
