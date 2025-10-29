import { generateTypeDocumentation } from './scripts/generate-type-documentation';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import type { AstroIntegration } from 'astro';
import autoImport from 'astro-auto-import';
import pagefind from 'astro-pagefind';
import { defineConfig, envField } from 'astro/config';
import { execSync } from 'node:child_process';
import transformLucideImports, { SUPPORTED_EXTENSIONS } from 'vite-plugin-transform-lucide-imports';

export function getSite() {
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
		skeleton(),
		react(),
		svelte(),
		autoImport({
			imports: [
				{
					'./src/components/ui/framework.astro': [['default', 'Framework']],
					'./src/components/ui/api-table.astro': [['default', 'ApiTable']],
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
		plugins: [
			/* @ts-expect-error vite version mismatch */
			tailwindcss(),
			/* @ts-expect-error vite version mismatch */
			transformLucideImports({
				extensions: [...SUPPORTED_EXTENSIONS, '.astro'],
				onwarn(warning, defaultHandler) {
					if (warning.message.match(/Skipping optimization of (\S+) because \1 is already a tree shaken package/)) {
						return;
					}
					defaultHandler(warning.message);
				},
			}),
		],
	},
	adapter: vercel(),
});

function skeleton(): AstroIntegration {
	return {
		name: 'skeleton',
		hooks: {
			'astro:config:setup': async (context) => {
				if (context.command !== 'build') {
					return;
				}
				context.logger.info('Generating type documentation...');
				await generateTypeDocumentation();
				context.logger.info('Type documentation generated.');
			},
		},
	};
}
