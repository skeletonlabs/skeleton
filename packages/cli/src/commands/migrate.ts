import { globSync } from 'fast-glob';
import { getPackage } from '../internal/get-package.js';

const MIGRATIONS = {
	'skeleton-3': migrateToSkeletonThree
};

export default function (migration: keyof typeof MIGRATIONS) {
	if (!Object.keys(MIGRATIONS).includes(migration)) {
		throw new Error(`Migration ${migration} not found, valid migrations are: ${Object.keys(MIGRATIONS).join(', ')}`);
	}
	MIGRATIONS[migration]();
}

async function migrateToSkeletonThree() {
	const pkg = getPackage();
	if (!pkg) {
		throw new Error('`package.json` not found');
	}
	const files = globSync('./**/*.{js,mjs,cjs,ts,mts,cts,svelte}');
	function migrateDependencies() {

	}
	function migrateImports() {

	}
	function migrateClasses() {

	}
}
