import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../${params.slug}.md`);
		const { title, date, author, category, tags } = post.metadata
		const content = post.default
		return { title, date, author, category, tags, content};
	}
	catch {
		return {
			error: "Error loading post"
		}
	}
}
