import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './vitest.setup.js',
		include: ['./src/**/*.test.{ts,tsx}']
	}
});
