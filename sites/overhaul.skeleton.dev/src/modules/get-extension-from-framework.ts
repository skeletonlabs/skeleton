import type { CollectionEntry } from 'astro:content';

export function getExtensionFromFramework(framework: CollectionEntry<'frameworks'>['id']) {
	switch (framework) {
		case 'react':
			return 'tsx';
		case 'svelte':
			return 'svelte';
		default:
			throw new Error(`Unsupported framework: ${framework}. Supported frameworks are: react, svelte`);
	}
}
