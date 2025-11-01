import { getCollection as getCollectionAstro, type CollectionEntry, type CollectionKey } from 'astro:content';

export async function getCollection<T extends CollectionKey>(...args: Parameters<typeof getCollectionAstro<T>>) {
	const entries = await getCollectionAstro(...args);
	return entries.toSorted((a, b) => {
		if ('order' in a.data && 'order' in b.data) {
			return a.data.order - b.data.order || a.id.localeCompare(b.id);
		}
		return a.id.localeCompare(b.id);
	});
}

const docs = await getCollection('docs');

export function getSiblingDoc(doc: CollectionEntry<'docs'>, direction: 'previous' | 'next') {
	const parts = doc.id.split('/');
	const dir = parts.slice(0, -1).join('/');
	const docsInDir = docs.filter((d) => {
		const dParts = d.id.split('/');
		const dDir = dParts.slice(0, -1).join('/');
		return dDir === dir;
	});
	const index = docsInDir.findIndex((d) => d.id === doc.id);
	if (index === -1) {
		return;
	}
	return direction === 'previous' ? docsInDir[index - 1] : docsInDir[index + 1];
}
