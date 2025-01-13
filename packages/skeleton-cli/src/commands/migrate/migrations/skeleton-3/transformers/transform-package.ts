import { readFile, writeFile } from 'fs/promises';
import type { PackageJson } from 'type-fest';
import getLatestVersion from 'latest-version';
import { coerce, lt } from 'semver';
import { sortPropertiesAlphabetically } from '../../../../../utility/sort-properties-alphabetically';

async function transformPackageContent(code: string) {
	const pkg = JSON.parse(code) as PackageJson;
	const skeletonVersion = await getLatestVersion('@skeletonlabs/skeleton', { version: '>=3.0.0-0 <4.0.0' });
	const skeletonSvelteVersion = await getLatestVersion('@skeletonlabs/skeleton-svelte', { version: '>=1.0.0-0 <2.0.0' });
	for (const field of ['dependencies', 'devDependencies'] as const) {
		if (!pkg[field]) {
			continue;
		}
		const coerced = coerce(pkg[field]['@skeletonlabs/skeleton']);
		if (coerced && lt(coerced.version, '3.0.0')) {
			delete pkg[field]['@skeletonlabs/skeleton'];
			pkg[field]['@skeletonlabs/skeleton-svelte'] = `^${skeletonSvelteVersion}`;
		}
		if (pkg[field]['@skeletonlabs/tw-plugin']) {
			delete pkg[field]['@skeletonlabs/tw-plugin'];
			pkg[field]['@skeletonlabs/skeleton'] = `^${skeletonVersion}`;
		}
		pkg[field] = sortPropertiesAlphabetically(pkg[field] as Record<string, string>);
	}
	return JSON.stringify(pkg, null, '\t');
}

async function transformPackage(path: string) {
	const code = await readFile(path, 'utf-8');
	const transformed = await transformPackageContent(code);
	await writeFile(path, transformed);
}

export { transformPackageContent, transformPackage };
