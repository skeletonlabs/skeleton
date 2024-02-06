import { defineConfig } from "astro/config";

// Integrations
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import AutoImport from 'astro-auto-import';
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
    // https://github.com/delucis/astro-auto-import/tree/main/packages/astro-auto-import
    AutoImport({
      imports: [{
        // import componentSet from "@lib/components/mdx/index";
        '@lib/components/mdx/index': [['default', 'componentSet']],
        // import { Code } from 'astro-expressive-code/components';
        'astro-expressive-code/components': ['Code'],
        // import { Preview } from '@lib/components/react/Preview.tsx'
        '@lib/components/react/Preview.tsx': ['Preview'],
        // import { FrameworkTabs } from '@lib/components/react/FrameworkTabs''
        '@lib/components/react/FrameworkTabs.tsx': ['FrameworkTabs'],
      }]
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