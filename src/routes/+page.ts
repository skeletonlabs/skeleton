import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const getContributors = async () => {
		const res = await fetch('https://api.github.com/repos/skeletonlabs/skeleton/contributors');
		if (!res.ok) throw new Error('failed to fetch posts: ' + res.body); // ? needs to be a message
		const body = (await res.json()) as any[];
		return body;
	};
	return { contributors: getContributors() };
};
