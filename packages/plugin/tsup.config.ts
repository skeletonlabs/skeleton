import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	outDir: 'dist',
	sourcemap: true,
	format: ['cjs'],
	publicDir: 'src/styles',
	tsconfig: 'tsconfig.json',
	ignoreWatch: ['src/tailwind/generated']
});
