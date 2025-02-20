import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		lib: {
			formats: ['es'],
			entry: 'src/index.ts',
			fileName: 'index'
		}
	},
	plugins: [dts()]
});
