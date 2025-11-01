import { getCollection } from '@/modules/content';
import type { CollectionEntry } from 'astro:content';

export interface Section {
	label: string;
	docs: CollectionEntry<'docs'>[];
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
		docs: await getSection('get-started/'),
	},
	{
		label: 'Guides',
		docs: await getSection('guides/'),
	},
	{
		label: 'Design System',
		docs: await getSection('design/'),
	},
	{
		label: 'Tailwind Components',
		docs: await getSection('tailwind-components/'),
	},
	{
		label: 'Framework Components',
		docs: await getSection('framework-components/'),
	},
	{
		label: 'Integrations',
		docs: await getSection('integrations/'),
	},
	{
		label: 'Resources',
		docs: await getSection('resources/'),
	},
];
