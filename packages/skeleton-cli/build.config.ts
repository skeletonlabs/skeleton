import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	declaration: true,
	sourcemap: true,
	entries: ['src/index.ts', 'src/commands/migrate/index.ts'],
	outDir: 'dist',
	clean: true,
	rollup: {
		emitCJS: true
	}
});
