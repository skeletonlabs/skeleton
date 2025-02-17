import type { PackageJson } from 'type-fest';
import { coerce, lt } from 'semver';
import { sortPropertiesAlphabetically } from '../../../../../utility/sort-properties-alphabetically.js';
import detectIndent from 'detect-indent';

function transformPackage(code: string, skeletonVersion: string, skeletonSvelteVersion: string) {
	const pkg = JSON.parse(code) as PackageJson;
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
	return {
		code: JSON.stringify(pkg, null, detectIndent(code).indent || '\t')
	};
}

export { transformPackage };
