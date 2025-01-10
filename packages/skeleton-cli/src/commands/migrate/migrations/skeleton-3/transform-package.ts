import { readFile, writeFile } from 'fs/promises';
import type { PackageJson } from 'type-fest';
import getLatestVersion from 'latest-version';
import { lt, validRange } from 'semver';

async function transformPackageContent(code: string) {
	const pkg = JSON.parse(code) as PackageJson;
	const skeletonVersion = await getLatestVersion('@skeletonlabs/skeleton', { version: '>=3.0.0-0 <4.0.0' });
	const skeletonSvelteVersion = await getLatestVersion('@skeletonlabs/skeleton-svelte', { version: '>=1.0.0-0 <2.0.0' });
	for (const field of ['dependencies', 'devDependencies'] as const) {
		if (pkg[field]) {
			if (pkg[field]['@skeletonlabs/tw-plugin']) {
				pkg[field]['@skeletonlabs/skeleton'] = `^${skeletonVersion}`;
			}
			if (pkg[field]['@skeletonlabs/skeleton'] && lt(validRange(pkg[field]['@skeletonlabs/skeleton'])!, '3.0.0-0')) {
				pkg[field]['@skeletonlabs/skeleton-svelte'] = `^${skeletonSvelteVersion}`;
			}
		}
	}
	return JSON.stringify(pkg, null, '\t');
}

async function transformPackage(path: string) {
	const code = await readFile(path, 'utf-8');
	const transformed = await transformPackageContent(code);
	await writeFile(path, transformed);
}

export { transformPackageContent, transformPackage };
