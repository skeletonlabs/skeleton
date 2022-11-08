import { json } from '@sveltejs/kit';

export const fetchMarkdownPosts = async () => {
	// be careful with paths that have layout groups or parameters, if you change this, change the path stripping slice() below.
	const allPostFiles = import.meta.glob('../../blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const post = await resolver();
			const meta = post.metadata;
			const postPath =  path.slice(5, -3);

			return {
				meta,
				path: postPath
			};
		})
	);

	return allPosts;
};

// This is done as an API so that it can be called from multiple places (like homepage and blog), as
// well as serve as the basis for an RSS feed

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
	const allPosts = await fetchMarkdownPosts();
	
	
	let sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});
	const size = sortedPosts.length;
	const offset = 0 //Number(url.searchParams.get('offset') ?? '0');
	const limit = size //Number(url.searchParams.get('limit') ?? size);

	return json({ offset, limit, size, posts: sortedPosts.slice(offset, offset + limit) });
};