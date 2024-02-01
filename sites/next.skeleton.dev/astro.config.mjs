import { defineConfig } from "astro/config";

// Integrations
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import expressiveCode from "astro-expressive-code";
import mdx from '@astrojs/mdx';
// Plugins
import skeletonPluginWatcher from "./skeleton-plugin-watcher.js";
// Adapters
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		svelte(),
		react({
			// https://docs.astro.build/en/guides/integrations-guide/react/
			experimentalReactChildren: true,
		}),
		expressiveCode({
			themes: ['dracula'],
		}),
		// Keep this last
		mdx(),
	],
	vite: {
		plugins: [skeletonPluginWatcher()]
	},
	output: "server",
	adapter: cloudflare()
});