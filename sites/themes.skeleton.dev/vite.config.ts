import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
	plugins: [sveltekit(), tailwind()]
});
