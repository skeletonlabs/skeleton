import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { svelteTesting } from "@testing-library/svelte/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [tailwindcss(), svelte(), svelteTesting()],
	test: {
		environment: "jsdom",
		setupFiles: ["./vitest.setup.js"],
		exclude: ["node_modules/**", ".svelte-kit/**", "dist/**"],
	},
});
