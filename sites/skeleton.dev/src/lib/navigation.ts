import type { HTMLAttributes } from 'astro/types';
import { type CollectionEntry, getCollection } from 'astro:content';

export interface NavigationItem extends HTMLAttributes<'a'> {
	title: string;
	tag?: string;
}

export interface NavigationGroup {
	title: string;
	items: NavigationItem[];
}

const sortByOrder = (a: CollectionEntry<'docs'>, b: CollectionEntry<'docs'>) => a.data.order - b.data.order;

async function queryCollection(startsWith: string) {
	return (
		await getCollection('docs', (entry) => {
			if (!entry.id.startsWith(startsWith)) {
				return false;
			}
			if (entry.id.split('/').length > 2) {
				return false;
			}
			if (entry.id.endsWith('meta')) {
				return false;
			}
			return true;
		})
	).toSorted(sortByOrder);
}

async function queryMetaCollection(startsWith: string) {
	return (
		await getCollection('docs', (entry) => {
			if (!entry.id.startsWith(startsWith)) {
				return false;
			}
			if (!entry.id.endsWith('meta')) {
				return false;
			}
			return true;
		})
	).toSorted(sortByOrder);
}

const toNavItems = (entries: CollectionEntry<'docs'>[]) =>
	entries.map((page) => ({
		title: page.data.title,
		href: `/docs/${page.id}`,
		tag: page.data.stability === 'stable' ? undefined : page.data.stability,
	}));

const sections: [string, string, (prefix: string) => Promise<CollectionEntry<'docs'>[]>][] = [
	['Get Started', 'get-started/', queryCollection],
	['Guides', 'guides/', queryCollection],
	['Design System', 'design/', queryCollection],
	['Tailwind Components', 'tailwind/', queryCollection],
	['Functional Components', 'components/', queryMetaCollection],
	['Headless Components', 'headless/', queryCollection],
	['Integrations', 'integrations/', queryMetaCollection],
	['Resources', 'resources/', queryCollection],
];

export const commonNavigationGroups: NavigationGroup[] = await Promise.all(
	sections.map(async ([title, prefix, queryFn]) => ({
		title,
		items: toNavItems(await queryFn(prefix)),
	})),
);
