import { defineBuildConfig } from 'unbuild';
import { join } from 'node:path';
import { copyFile } from 'node:fs/promises';

export default defineBuildConfig({
	entries: ['./src/index.ts'],
	declaration: true,
	clean: true,
	rollup: {
		emitCJS: true,
		output: {
			preserveModules: true
		},
		inlineDependencies: true
	},
	failOnWarn: false,
	hooks: {
		async 'build:done'(ctx) {
			await copyFile('src/index.css', join(ctx.options.outDir, 'index.css'));
		}
	}
});
