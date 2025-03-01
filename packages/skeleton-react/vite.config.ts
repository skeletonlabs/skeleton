import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./vitest.setup.js",
		include: ["./src/**/*.test.{ts,tsx}"],
	},
});
