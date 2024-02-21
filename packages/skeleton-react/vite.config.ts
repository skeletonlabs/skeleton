import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react";
import RemixRouter from "vite-plugin-remix-router";
import skeletonPluginWatcher from "vite-plugin-tw-plugin-watcher";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// https://vite-remix-router.vercel.app/
		RemixRouter(),
		skeletonPluginWatcher(
			path.resolve(
				path.join("..", "..", "packages", "skeleton", "src", "plugin")
			)
		),
	],
});
