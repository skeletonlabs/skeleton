import { getCollection as getCollectionAstro, type CollectionKey } from 'astro:content';

export async function getCollection<T extends CollectionKey>(...args: Parameters<typeof getCollectionAstro<T>>) {
	const entries = await getCollectionAstro(...args);
	return entries.toSorted((a, b) => {
		if ('order' in a.data && 'order' in b.data) {
			return a.data.order - b.data.order || a.id.localeCompare(b.id);
		}
		return a.id.localeCompare(b.id);
	});
}
