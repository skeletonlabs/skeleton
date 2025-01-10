import { migrateProject as migrateProjectToSkeleton3 } from './migrations/skeleton-3.js';

const MIGRATIONS = new Map([['skeleton-3', migrateProjectToSkeleton3]]);

async function migrate(migration: string) {
	const migrate = MIGRATIONS.get(migration);
	if (migrate === undefined) {
		throw new Error(
			`Unknown migration: "${migration}". Valid migration(s) are: ${Array.from(MIGRATIONS.keys())
				.map((migration) => `"${migration}"`)
				.join(', ')}`
		);
	}
	await migrate();
}

export { migrate };
