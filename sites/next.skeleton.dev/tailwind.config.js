import { join } from 'path';
import { skeleton } from "@skeletonlabs/skeleton/plugin";
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    join(require.resolve('@skeletonlabs/skeleton-react'), '../**/*.{html,js,ts,jsx,tsx}'),
    join(require.resolve('@skeletonlabs/skeleton-svelte'), '../**/*.{html,js,ts,svelte}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    forms,
    // typography,
    skeleton({
      themes: {
        preset: [
          { name: "next" },
        ],
      },
    }),
  ],
};
