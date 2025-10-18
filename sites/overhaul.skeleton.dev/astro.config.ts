import { generateTypeDocumentation } from './scripts/generate-type-documentation';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import type { AstroIntegration } from 'astro';
import { defineConfig } from 'astro/config';
import transformLucideImports, { SUPPORTED_EXTENSIONS } from 'vite-plugin-transform-lucide-imports';

export default defineConfig({
	site: `https://${process.env.VERCEL_ENV === 'production' ? process.env.VERCEL_PROJECT_PRODUCTION_URL : process.env.VERCEL_URL}`,
	prefetch: true,
	markdown: {
		syntaxHighlight: false,
	},
	integrations: [skeleton(), react(), svelte(), mdx(), partytown()],
	vite: {
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
	output: 'server',
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
