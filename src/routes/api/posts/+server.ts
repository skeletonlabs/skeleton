import { json } from '@sveltejs/kit';

export const fetchMarkdownPosts = async () => {
	// be careful with paths that have layouts or parameters
	//const allPostFiles = import.meta.glob('/src/routes/(blog)/blog/[slug]/*.md');
	const allPostFiles = import.meta.glob('../../blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath =  path.slice(5, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

/** @type {import('./$types').RequestHandler} */
export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});

	return json(sortedPosts);
};