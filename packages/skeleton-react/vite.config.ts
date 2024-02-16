import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import RemixRouter from "vite-plugin-remix-router";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // https://vite-remix-router.vercel.app/
    RemixRouter(),
  ],
});
