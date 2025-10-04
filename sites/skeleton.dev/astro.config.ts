import { generateTypeDocumentation } from './scripts/generate-type-documentation';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import svelte, { vitePreprocess } from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import type { AstroIntegration } from 'astro';
import AutoImport from 'astro-auto-import';
import expressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createIndex } from 'pagefind';
import { pagefind } from 'vite-plugin-pagefind';

function skeleton(): AstroIntegration {
	return {
		name: 'skeleton',
		hooks: {
			'astro:build:start': async (ctx) => {
				ctx.logger.info('Generating type documentation...');
				await generateTypeDocumentation();
				ctx.logger.info('Type documentation generated.');
			},
			'astro:build:done': async (ctx) => {
				ctx.logger.info('Removing meta pages...');
				for (const page of ctx.pages) {
					if (!page.pathname.endsWith('/meta/')) {
						continue;
					}
					await rm(fileURLToPath(new URL(page.pathname, ctx.dir).href), {
						recursive: true,
					});
					ctx.logger.info(`Removed ${page.pathname}`);
				}
				ctx.logger.info('Meta pages removed.');
				ctx.logger.info('Generating search index...');
				const { index, errors } = await createIndex({
					excludeSelectors: ['.expressive-code'],
				});
				if (!index) {
					throw new Error(`Failed to create search index: ${errors?.join(', ')}`);
				}
				await index.addDirectory({
					path: fileURLToPath(ctx.dir),
				});
				const response = await index.writeFiles();
				if (response.errors) {
					ctx.logger.error(`Failed to write search index: ${response.errors.join(', ')}`);
				} else {
					ctx.logger.info('Search index generated.');
				}
			},
		},
	};
}

export default defineConfig({
	integrations: [
		skeleton(),
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
					'@/components/ui/api-table.astro': [['default', 'ApiTable']],
					'@/components/ui/anatomy.astro': [['default', 'Anatomy']],
					'@/components/ui/preview.tsx': [['default', 'Preview']],
					'@/components/ui/framework-tabs.tsx': [['default', 'FrameworkTabs']],
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
			// @ts-expect-error - vite version mismatch
			tailwindcss(),
			// @ts-expect-error - vite version mismatch
			pagefind({
				outputDirectory: 'dist',
			}),
		],
	},
});
