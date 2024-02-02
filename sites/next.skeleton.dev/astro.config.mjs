import { defineConfig } from "astro/config";

// Integrations
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import mdx from '@astrojs/mdx';
// Vite Plugins
import skeletonPluginWatcher from "./skeleton-plugin-watcher.js";
// Adapters
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // prettier-ignore
  integrations: [
    // https://docs.astro.build/en/guides/integrations-guide/tailwind/
    tailwind(),
    // https://docs.astro.build/en/guides/integrations-guide/svelte/
    svelte(),
    // https://docs.astro.build/en/guides/integrations-guide/react/
    react({
      experimentalReactChildren: true
    }),
    // https://expressive-code.com/
    expressiveCode({
      themes: ['dark-plus']
    }),
    // https://www.astroicon.dev/
    icon({
      include: {
        iconDir: 'src/icons',
        // https://icon-sets.iconify.design/heroicons/
        'heroicons-outline': '*',
        // https://icon-sets.iconify.design/simple-icons/
        'simple-icons': '*'
      }
    }),
    // IMPORTANT: MUST BE LAST INTEGRATION
    // https://docs.astro.build/en/guides/integrations-guide/mdx/
    mdx()
  ],
  vite: {
    plugins: [skeletonPluginWatcher()]
  },
  output: "server",
  adapter: cloudflare()
});