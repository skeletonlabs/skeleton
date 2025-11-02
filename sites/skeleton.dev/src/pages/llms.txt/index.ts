import { commonSections } from '@/modules/navigation';
import { resolvePath } from '@/modules/resolve-path';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
	return new Response(
		[
			'# Skeleton Documentation',
			'',
			...commonSections.map((section) => {
				return [
					`## ${section.label}`,
					'',
					section.docs.map((doc) => `- [${doc.data.title}](${resolvePath(context.params, `/docs/[framework]/${doc.id}.md`)})`).join('\n'),
					'',
				].join('\n');
			}),
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
