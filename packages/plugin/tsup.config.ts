import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	outDir: 'dist',
	sourcemap: true,
	dts: true,
	format: ['cjs'],
	clean: true,
	tsconfig: 'tsconfig.json',
	ignoreWatch: ['src/tailwind/generated']
});
