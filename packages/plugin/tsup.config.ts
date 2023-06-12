import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	outDir: 'dist',
	sourcemap: true,
	format: ['cjs'],
	dts: true,
	clean: true,
	tsconfig: 'tsconfig.json',
	ignoreWatch: ['src/tailwind/generated']
});
