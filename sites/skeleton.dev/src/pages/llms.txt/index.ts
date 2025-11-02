import { getCollection } from '@/modules/content';
import { commonSections } from '@/modules/navigation';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	const frameworks = await getCollection('frameworks');
	return new Response(
		[
			'# Skeleton Documentation',
			'',
			...frameworks.map((framework) => [
				`## ${framework.data.name}`,
				'',
				...commonSections.map((section) => {
					return [
						`### ${section.label}`,
						'',
						...section.docs.map((doc) => `- [${doc.data.title}](/docs/${framework.id}/${doc.id}.md)`),
						'',
					].join('\n');
				}),
			]),
		]
			.flat()
			.join('\n'),
		{
			headers: {
				'Content-Type': 'text/plain',
			},
		},
	);
};
