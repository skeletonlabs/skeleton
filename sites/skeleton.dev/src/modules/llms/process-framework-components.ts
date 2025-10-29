import type { CollectionEntry } from 'astro:content';
import type { Root } from 'mdast';

export function processFrameworkComponents(root: Root, frameworks: CollectionEntry<'frameworks'>[]) {
	// TODO: Find <Framework> components within MDX nodes and process them
}
