export const prerender = true;
export const fetchMarkdownPosts = async () => {
	// be careful with paths that have layout groups or parameters, if you change this, change the path stripping slice() below.
	const allPostFiles = import.meta.glob('./*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const post = await resolver();
			const meta = post.metadata;
			const postPath = '/blog' + path.slice(1, -3);
			return {
				meta,
				path: postPath
			};
		})
	);

	return allPosts;
};

export const load = async () => {
	const allPosts = await fetchMarkdownPosts();
	let sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});
	const size = sortedPosts.length;
	const offset = 0 //Number(url.searchParams.get('offset') ?? '0');
	const limit = size //Number(url.searchParams.get('limit') ?? size);

	return { offset, limit, size, posts: sortedPosts.slice(offset, offset + limit) };
	// const response = await fetch(`/api/posts`)
	// const data = await response.json()
	// return {...data}
}