import { defineConfig, type Options } from 'tsup';

const base: Options = {
	sourcemap: true,
	dts: true,
	clean: true,
	// treeshake: false,
	// noExternal: [],
	// skipNodeModulesBundle: true,
	ignoreWatch: ['src/plugin/extends/generated']
};

export default defineConfig([
	{
		// plugin
		...base,
		entry: ['src/plugin/index.ts'],
		outDir: 'dist/plugin',
		format: ['cjs'],
		tsconfig: 'src/plugin/tsconfig.json'
	},
	{
		// core
		...base,
		entry: ['src/core/index.ts'],
		outDir: 'dist/core',
		format: ['esm'],
		tsconfig: 'src/core/tsconfig.json'
	}
]);
