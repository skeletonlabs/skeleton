import skeleton3 from './migrations/skeleton-3/index.js';
import { Command, program } from 'commander';

interface MigrateOptions {
	cwd?: string;
}

const MIGRATIONS = new Map([['skeleton-3', skeleton3]]);

const migrate = new Command('migrate');

migrate.description('Run a migration');
migrate.argument('<migration>', 'The migration to run');
migrate.option('--cwd <cwd>', 'The directory to run the migration in');
migrate.action(async (migration: string, options: MigrateOptions) => {
	const migrate = MIGRATIONS.get(migration);
	if (!migrate) {
		program.error(
			`error: unknown migration "${migration}". Valid migration(s) are: ${Array.from(MIGRATIONS.keys())
				.map((migration) => `"${migration}"`)
				.join(', ')}`
		);
	}
	await migrate(options);
});

export type { MigrateOptions };
export { migrate };
