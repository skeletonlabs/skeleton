import skeleton3 from './migrations/skeleton-3';
import { Argument, Command, Option } from 'commander';

interface MigrateOptions {
	cwd?: string;
}
const MIGRATIONS = {
	'skeleton-3': skeleton3,
} as const;

const migrate = new Command('migrate')
	.description('Run a migration')
	.addArgument(new Argument('<migration>', 'The migration to run').choices(Object.keys(MIGRATIONS)))
	.addOption(new Option('--cwd <cwd>', 'The directory to run the migration in'))
	.action((migration: keyof typeof MIGRATIONS, options: MigrateOptions) => MIGRATIONS[migration](options));

export type { MigrateOptions };
export { migrate };
