import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
	entry: ['src/index.ts'],
	outDir: 'dist',
	sourcemap: true,
	dts: true,
	format: ['cjs'],
	publicDir: 'src/styles',
	tsconfig: 'tsconfig.json',
	ignoreWatch: ['src/tailwind/generated']
}));
