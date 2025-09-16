import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { PackageJson } from 'type-fest';

async function getOurPackageJson(): Promise<Required<PackageJson>> {
	const packageJsonPath = join(dirname(fileURLToPath(import.meta.url)), '../package.json');
	const content = await readFile(packageJsonPath, 'utf8');
	return JSON.parse(content);
}

export { getOurPackageJson };
