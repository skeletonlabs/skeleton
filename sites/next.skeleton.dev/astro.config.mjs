import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import skeletonPluginWatcher from "./skeleton-plugin-watcher.js";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		svelte(),
		react({
			// https://docs.astro.build/en/guides/integrations-guide/react/
			experimentalReactChildren: true,
		}),
	],
	vite: {
		plugins: [skeletonPluginWatcher()],
	},
});
