import { getCollection, getEntry } from 'astro:content';

export async function getMetadata(categorySlug: string) {
	const entry = await getEntry('docs', `${categorySlug}/meta`);
	if (!entry) {
		throw new Error(`No metadata found for category: ${categorySlug}`);
	}
	return entry.data;
}

export async function getEntriesFromCategory(category: string) {
	const entries = await getCollection('docs', (entry) => entry.slug.startsWith(`${category}/`));
	return entries;
}

export async function getCategorySlugs() {
	const entries = await getCollection('docs');
	const categorySlugs: string[] = [];
	for (const entry of entries) {
		const slug = entry.slug.split('/').at(0);
		if (slug === undefined || categorySlugs.includes(slug)) {
			continue;
		}
		categorySlugs.push(slug);
	}
	return categorySlugs;
}

export async function getCategories() {
	const categorySlugs = await getCategorySlugs();
	const categoryPromises = categorySlugs.map(async (category) => {
		const data = await getMetadata(category);
		return {
			slug: category,
			data,
			entries: (await getEntriesFromCategory(category)).toSorted((a, b) => a.data.order - b.data.order),
		};
	});
	const categories = await Promise.all(categoryPromises);
	return categories.toSorted((a, b) => a.data.order - b.data.order);
}

export type Metadata = Awaited<ReturnType<typeof getMetadata>>;
export type Category = Awaited<ReturnType<typeof getCategories>>[number];
export type CategoryEntry = Awaited<ReturnType<typeof getEntriesFromCategory>>[number];
