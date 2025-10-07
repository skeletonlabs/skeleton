import { sortPropertiesAlphabetically } from '../../../../../utility/sort-properties-alphabetically.js';
import detectIndent from 'detect-indent';
import { coerce, lt } from 'semver';
import type { PackageJson } from 'type-fest';

function transformPackageJson(code: string) {
	const pkg = JSON.parse(code) as PackageJson;
	for (const field of ['dependencies', 'devDependencies'] as const) {
		if (!pkg[field]) {
			continue;
		}
		for (const dep of ['@skeletonlabs/skeleton', '@skeletonlabs/skeleton-svelte', '@skeletonlabs/skeleton-react']) {
			if (!pkg[field][dep]) {
				continue;
			}
			const coerced = coerce(pkg[field][dep]);
			if (coerced && lt(coerced.version, '4.0.0')) {
				delete pkg[field][dep];
				pkg[field][dep] = 'next';
			}
		}
		pkg[field] = sortPropertiesAlphabetically(pkg[field] as Record<string, string>);
	}
	return {
		code: JSON.stringify(pkg, undefined, detectIndent(code).indent || '\t'),
	};
}

export { transformPackageJson };
