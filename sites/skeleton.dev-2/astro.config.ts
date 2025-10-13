import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import pagefind from 'astro-pagefind';

export default defineConfig({
  site: `https://${process.env.VERCEL_URL}`,
  adapter: vercel(),
  integrations: [
    react(),
    svelte({
      compilerOptions: {
        experimental: {
          async: true,
        }
      }
    }),
    mdx({
      optimize: true
    }),
    sitemap(),
    partytown(),
    pagefind()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});