import { getPackage } from '../internal/get-package.js';

const MIGRATIONS = {
	'skeleton-3': skeletonThree
};

export default function (migration: string) {
	if (!Object.keys(MIGRATIONS).includes(migration)) {
		throw new Error(`Migration ${migration} not found, valid migrations are: ${Object.keys(MIGRATIONS).join(', ')}`);
	}
}

function skeletonThree() {
	console.log('Migrating to V3...');
	const pkg = getPackage();
	console.log(pkg);
}
