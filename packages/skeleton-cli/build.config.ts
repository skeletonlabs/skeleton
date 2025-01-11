import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: ['./src/index.ts', './src/commands/migrate/index.ts'],
	declaration: true,
	clean: true
});
