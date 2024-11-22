import { describe, expect, test } from 'vitest';
import { sync as globSync } from 'fast-glob';
import { basename } from 'path';
import { readFileSync } from 'fs';
import {
	migratePackage,
	migrateTailwindConfig,
	migrateSvelteCode,
	migrateModuleCode
} from '../../../../src/commands/migrate/migrations/skeleton-3.js';

const migrationFunctions = {
	packages: migratePackage,
	'tailwind-configs': migrateTailwindConfig,
	components: migrateSvelteCode,
	modules: migrateModuleCode
} as const;

type MigrationType = keyof typeof migrationFunctions;

describe('skeleton-3', () => {
	const fixtures = globSync('./fixtures/**/*', {
		cwd: import.meta.dirname,
		absolute: true
	});
	const groupedFixtures = fixtures.reduce(
		(acc, fixturePath) => {
			const pathParts = fixturePath.split('/');
			const fixturesIndex = pathParts.indexOf('fixtures');
			if (fixturesIndex === -1) return acc;
			const migrationType = pathParts[fixturesIndex + 1] as MigrationType;
			if (!acc[migrationType]) {
				acc[migrationType] = [];
			}
			acc[migrationType].push(fixturePath);
			return acc;
		},
		{} as Record<MigrationType, string[]>
	);
	for (const [migrationType, fixtures] of Object.entries(groupedFixtures)) {
		describe(migrationType, () => {
			const migrateFunction = migrationFunctions[migrationType as MigrationType];
			fixtures.forEach((fixturePath) => {
				const fileName = basename(fixturePath);
				const resultPath = fixturePath.replace('/fixtures/', '/results/');
				test(`${fileName}`, () => {
					const result = migrateFunction(readFileSync(fixturePath, 'utf-8')).trim();
					const expected = readFileSync(resultPath, 'utf-8').trim();
					expect(result).toBe(expected);
				});
			});
		});
	}
});
