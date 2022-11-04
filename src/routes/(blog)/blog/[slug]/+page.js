
export async function load({ params }) {
	// vite is doing some weird stuff where just going up a directory appends extra directories, presumably to handle
	// things like the 'invisible' directories like [slug] and (blog)
	const post = await import(`./${params.slug}.md`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}