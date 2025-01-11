import skeleton3 from './migrations/skeleton-3/index.js';
import { Argument, Command, Option } from 'commander';
import { MapKey } from 'type-fest/source/entry';

interface MigrateOptions {
	cwd?: string;
}

const MIGRATIONS = new Map([['skeleton-3', skeleton3]] as const);

const migrate = new Command('migrate')
	.description('Run a migration')
	.addArgument(new Argument('<migration>', 'The migration to run').choices(Array.from(MIGRATIONS.keys())))
	.addOption(new Option('--cwd <cwd>', 'The directory to run the migration in'))
	.action(async (migration: MapKey<typeof MIGRATIONS>, options: MigrateOptions) => {
		await MIGRATIONS.get(migration)!(options);
	});

export type { MigrateOptions };
export { migrate };
