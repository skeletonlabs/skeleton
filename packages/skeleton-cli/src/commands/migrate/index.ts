import skeleton3 from './migrations/skeleton-3/index.js';

const MIGRATIONS = new Map([['skeleton-3', skeleton3]]);

interface MigrateOptions {
	cwd?: string;
}

async function migrate(migration: string, options: MigrateOptions = {}) {
	const migrate = MIGRATIONS.get(migration);
	if (migrate === undefined) {
		throw new Error(
			`Unknown migration: "${migration}". Valid migration(s) are: ${Array.from(MIGRATIONS.keys())
				.map((migration) => `"${migration}"`)
				.join(', ')}`
		);
	}
	await migrate(options);
}

export type { MigrateOptions };
export { migrate };
