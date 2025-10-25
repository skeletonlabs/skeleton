import { getCollection } from '@/modules/content';
import type { CollectionEntry } from 'astro:content';

export interface Section {
	label: string;
	items: CollectionEntry<'docs'>[];
}

async function getSection(prefix: string) {
	return await getCollection('docs', (doc) => {
		if (!doc.id.startsWith(prefix)) {
			return false;
		}
		if (doc.id.split('/').length > 2) {
			return false;
		}
		return true;
	});
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
