import { json } from '@sveltejs/kit';

export const fetchMarkdownPosts = async () => {
	// sure, go ahead and try and put in the real path, it totally doesn't work,
	// but stick in a wildcard... and it works :/
	//const allPostFiles = import.meta.glob('/src/routes/(blog)/blog/[slug]/*.md');
	const allPostFiles = import('/src/routes/(blog)/blog/[slug]/posts/1.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = '/blog/' + path.slice(31, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ request }) => {
	//console.log(request);
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});

	return json(sortedPosts);
};