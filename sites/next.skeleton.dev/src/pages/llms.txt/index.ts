import { getCollection } from 'astro:content';

export async function GET() {
	const pages = await getCollection('docs');

	return (await Promise.all(pages.map(async (page) => {}))).join('\n');
}
