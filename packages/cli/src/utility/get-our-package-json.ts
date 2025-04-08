import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import type { PackageJson } from 'type-fest';
import { readFile } from 'node:fs/promises';

async function getOurPackageJson(): Promise<Required<PackageJson>> {
	const packageJsonPath = join(dirname(fileURLToPath(import.meta.url)), '../package.json');
	const content = await readFile(packageJsonPath, 'utf-8');
	return JSON.parse(content);
}

export { getOurPackageJson };
