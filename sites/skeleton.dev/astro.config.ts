import { generateTypeDocumentation } from './scripts/generate-type-documentation';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import svelte, { vitePreprocess } from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import type { AstroIntegration } from 'astro';
import AutoImport from 'astro-auto-import';
import expressiveCode from 'astro-expressive-code';
import { defineConfig } from 'astro/config';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createIndex } from 'pagefind';
import { pagefind } from 'vite-plugin-pagefind';
import transformLucideImports from 'vite-plugin-transform-lucide-imports';

function skeleton(): AstroIntegration {
	return {
		name: 'skeleton',
		hooks: {
			'astro:config:setup': async (ctx) => {
				if (ctx.command !== 'build') {
					return;
				}
				ctx.logger.info('Generating type documentation...');
				await generateTypeDocumentation();
				ctx.logger.info('Type documentation generated.');
			},
			'astro:build:done': async (ctx) => {
				ctx.logger.info('Generating search index...');
				const pagefind = await createIndex({
					excludeSelectors: ['.expressive-code'],
				});
				if (!pagefind.index || pagefind.errors.length > 0) {
					throw new Error(`Failed to create search index: ${pagefind.errors.join(', ')}`);
				}
				await pagefind.index.addDirectory({
					path: fileURLToPath(ctx.dir),
				});
				const response = await pagefind.index.writeFiles({
					outputPath: join(fileURLToPath(ctx.dir), 'pagefind'),
				});
				if (response.errors.length > 0) {
					ctx.logger.error(`Failed to write search index.: ${response.errors.join(', ')}`);
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
		react(),
		expressiveCode({
			defaultProps: { wrap: true },
			themes: ['dark-plus', 'github-dark'],
		}),
		AutoImport({
			imports: [
				{
					'astro-expressive-code/components': ['Code'],
					'@/components/ui/api-table.astro': [['default', 'ApiTable']],
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
			// @ts-expect-error - vite version mismatch
			transformLucideImports(),
		],
	},
});
