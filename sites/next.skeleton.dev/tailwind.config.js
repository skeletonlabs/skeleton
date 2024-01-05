import { skeleton } from "@skeletonlabs/skeleton-next/plugin";

// TODO: remove this
const enhancements = false;

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
          { name: "crimson", enhancements },
          { name: "gold-nouveau", enhancements },
          { name: "hamlindigo", enhancements },
          { name: "modern", enhancements },
          { name: "rocket", enhancements },
          { name: "sahara", enhancements },
          { name: "seafoam", enhancements },
          { name: "skeleton", enhancements },
          { name: "vintage", enhancements },
          { name: "wintry", enhancements },
        ],
      },
    }),
  ],
};
