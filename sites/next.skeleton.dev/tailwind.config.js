import { skeleton } from "@skeletonlabs/skeleton/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    skeleton({
      themes: {
        preset: [
          { name: "next" },
        ],
      },
    }),
  ],
};
