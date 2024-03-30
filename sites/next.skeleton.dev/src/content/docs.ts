import { getEntryBySlug } from 'astro:content';

export async function getCategoryMeta(category: string) {
	const meta = await getEntryBySlug('docs', category);
	if (meta === null || meta === undefined) {
		return null;
	}
	return meta;
}

export async function getComponentMeta(component: string) {
	const meta = await getEntryBySlug('docs', `components/${component}/meta`);
	if (meta === null || meta === undefined) {
		return null;
	}
	return meta;
}
