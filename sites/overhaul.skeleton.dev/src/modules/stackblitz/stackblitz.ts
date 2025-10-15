import { openReactStackblitzProject } from './stackblitz-react';
import { openSvelteStackblitzProject } from './stackblitz-svelte';
import type { CollectionEntry } from 'astro:content';

export function openStackblitzProject(code: string, framework: CollectionEntry<'frameworks'>['id']) {
	switch (framework) {
		case 'react':
			return openReactStackblitzProject(code);
		case 'svelte':
			return openSvelteStackblitzProject(code);
		default:
			throw new Error(`Unsupported framework: ${framework}. Supported frameworks are: react, svelte`);
	}
}
