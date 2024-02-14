import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
// import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// tsConfigPaths(),
		dts({
			include: ['src/lib/'],
		})
	],
	build: {
		lib: {
			entry: resolve(__dirname,'src/lib/index.ts'),
			name: 'skeletonreact',
			formats: ['es'],
			fileName: (format) => `skeleton-react.${format}.js`,
		},
		outDir: 'dist',
		emptyOutDir: true,
		minify: false,
		sourcemap: true,
		target: 'esnext',
		// still seems to HMR without this being needed
		watch: {
			include: ['src/**']
		},
		rollupOptions: {
			external: [...Object.keys(packageJson.dependencies)],
		},
	},
	server: {
		port: 3001,
	}
})

// https://vitejs.dev/config/
// export default defineConfig((configEnv) => ({
//   plugins: [
//     react(),
//     tsConfigPaths(),
//     linterPlugin({
//       include: ['./src}/**/*.{ts,tsx}'],
//       linters: [new EsLinter({ configEnv })],
//     }),
//     dts({
//       include: ['src/component/'],
//     }),
//   ],
//   build: {
//     lib: {
//       entry: resolve('src', 'component/index.ts'),
//       name: 'ReactViteLibrary',
//       formats: ['es', 'umd'],
//       fileName: (format) => `react-vite-library.${format}.js`,
//     },
//     rollupOptions: {
//       external: [...Object.keys(packageJson.peerDependencies)],
//     },
//   },
// }))