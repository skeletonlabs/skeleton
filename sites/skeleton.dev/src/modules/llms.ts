import type { CollectionEntry } from 'astro:content';

export function getMarkdownFromDoc(doc: CollectionEntry<'docs'>) {
	return doc.body;
}
