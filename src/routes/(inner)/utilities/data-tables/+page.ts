import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const getPlaceholderPosts = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/user/1/posts');
		if (!res.ok) throw new Error('failed to fetch posts: ' + res.body); // ? needs to be a message
		const body = (await res.json()) as Post[];
		return body;
	};
	return { posts: getPlaceholderPosts() };
};

type Post = {
	id: number;
	title: string;
	body: string;
	userId: number;
};
