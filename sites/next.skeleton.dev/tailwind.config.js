import { skeleton } from "@skeletonlabs/skeleton/plugin";
// import { skeleton } from "../../packages/skeleton/dist/plugin/index.cjs";

import forms from '@tailwindcss/forms';
// import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
