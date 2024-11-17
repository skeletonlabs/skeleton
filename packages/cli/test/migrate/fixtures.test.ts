import { describe, expect, test } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { migrate as migrateSkeleton3 } from '../../src/commands/migrate/migrations/skeleton-3.js';

interface Fixture {
	name: string;
	input: string;
	output: string;
}

interface MigrationGroup {
	migration: string;
	fixtures: Fixture[];
}

function getMigrationGroups(): MigrationGroup[] {
	const migrationMap = new Map<string, MigrationGroup>();
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);

	Object.keys(
		import.meta.glob('./fixtures/*/*.svelte', {
			query: '?raw'
		})
	).forEach((path) => {
		const [_, __, migration, fixtureName] = path.split('/');
		const name = fixtureName.replace('.svelte', '');
		const inputPath = path.replace('./', '');
		const outputPath = inputPath.replace('fixtures', 'results');

		const absoluteInputPath = resolve(__dirname, inputPath);
		const absoluteOutputPath = resolve(__dirname, outputPath);

		if (!migrationMap.has(migration)) {
			migrationMap.set(migration, { migration, fixtures: [] });
		}

		migrationMap.get(migration)!.fixtures.push({
			name,
			input: absoluteInputPath,
			output: absoluteOutputPath
		});
	});

	return Array.from(migrationMap.values());
}

function getMigrater(migration: string) {
	switch (migration) {
		case 'skeleton-3': {
			return migrateSkeleton3;
		}
		default: {
			throw new Error(`Unknown migration ${migration}`);
		}
	}
}

const migrationGroups = getMigrationGroups();

for (const group of migrationGroups) {
	describe(group.migration, () => {
		const migrate = getMigrater(group.migration);
		for (const fixture of group.fixtures) {
			test(fixture.name, () => {
				const actual = readFileSync(fixture.input, 'utf8');
				const expected = readFileSync(fixture.output, 'utf8');
				expect(migrate(actual)).toBe(expected);
			});
		}
	});
}
