import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'

export default defineConfig({
	plugins: [
		vue(),
		// tsConfigPaths(),
		dts({
			include: ['src/components/'],
		})
	],
	build: {
		lib: {
			entry: resolve(__dirname,'src/components/index.ts'),
			name: 'skeletonvue',
			formats: ['es'],
			fileName: (format) => `skeleton-vue.${format}.js`,
		},
		outDir: 'dist',
		emptyOutDir: true,
		minify: false,
		sourcemap: true,
		target: 'esnext',
		rollupOptions: {
			external: [...Object.keys(packageJson.dependencies)],
		},
	},
	server: {
		port: 3002,
	}
})