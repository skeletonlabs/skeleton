import { openReactStackblitzProject } from './stackblitz-react';
import { openSvelteStackblitzProject } from './stackblitz-svelte';
import type { CollectionEntry } from 'astro:content';

export function openStackblitzProject(framework: CollectionEntry<'frameworks'>['id'], files: Record<string, string>) {
	switch (framework) {
		case 'react':
			return openReactStackblitzProject(files);
		case 'svelte':
			return openSvelteStackblitzProject(files);
		default:
			throw new Error(`Unsupported framework: ${framework}. Supported frameworks are: react, svelte`);
	}
}
