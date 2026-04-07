import { sveltekit } from '@sveltejs/kit/vite';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import transformLucideImports from 'vite-plugin-transform-lucide-imports';

export default defineConfig({
	plugins: [sveltekit(), tailwind(), transformLucideImports()],
});
