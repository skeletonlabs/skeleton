import { type CollectionEntry, getCollection } from 'astro:content';

export interface Section {
	label: string;
	items: CollectionEntry<'docs'>[];
}

async function getSection(prefix: string) {
	const docs = await getCollection('docs', (entry) => {
		if (!entry.id.startsWith(prefix)) {
			return false;
		}
		if (entry.id.split('/').length > 2) {
			return false;
		}
		return true;
	});
	return docs.toSorted((a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id));
}

export const commonSections: Section[] = [
	{
		label: 'Get Started',
		items: await getSection('get-started/'),
	},
	{
		label: 'Guides',
		items: await getSection('guides/'),
	},
	{
		label: 'Design System',
		items: await getSection('design/'),
	},
	{
		label: 'Tailwind Components',
		items: await getSection('tailwind-components/'),
	},
	{
		label: 'Framework Components',
		items: await getSection('framework-components/'),
	},
	{
		label: 'Integrations',
		items: await getSection('integrations/'),
	},
	{
		label: 'Resources',
		items: await getSection('resources/'),
	},
];
