import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	test: {
		setupFiles: './test/setup.ts',
		globals: true,
		environment: 'jsdom'
	}
});
