import { sortPropertiesAlphabetically } from '../../../../../utility/sort-properties-alphabetically.js';
import detectIndent from 'detect-indent';
import { coerce, lt } from 'semver';
import type { PackageJson } from 'type-fest';

function transformPackageJson(code: string, skeletonVersion: string, skeletonSvelteVersion: string) {
	let isUsingComponents = false;
	const pkg = JSON.parse(code) as PackageJson;
	for (const field of ['dependencies', 'devDependencies'] as const) {
		if (!pkg[field]) {
			continue;
		}
		const coerced = coerce(pkg[field]['@skeletonlabs/skeleton']);
		if (coerced && lt(coerced.version, '3.0.0')) {
			isUsingComponents = true;
			delete pkg[field]['@skeletonlabs/skeleton'];
			pkg[field]['@skeletonlabs/skeleton-svelte'] = `^${skeletonSvelteVersion}`;
		}
		if (pkg[field]['@skeletonlabs/tw-plugin']) {
			delete pkg[field]['@skeletonlabs/tw-plugin'];
			pkg[field]['@skeletonlabs/skeleton'] = `^${skeletonVersion}`;
		}
		pkg[field] = sortPropertiesAlphabetically(pkg[field] as Record<string, string>);
	}
	return {
		code: JSON.stringify(pkg, undefined, detectIndent(code).indent || '\t'),
		meta: {
			isUsingComponents: isUsingComponents,
		},
	};
}

export { transformPackageJson };
