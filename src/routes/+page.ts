import { browser } from '$app/environment';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const getContributors = async () => {
		if (!browser) return []; // only fetch on the browser
		const res = await fetch('https://api.github.com/repos/skeletonlabs/skeleton/contributors');
		if (!res.ok) return []; // return an empty list
		const body = (await res.json()) as Contributor[];
		return body;
	};
	return { contributors: getContributors() };
};

type Contributor = {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	contributions: number;
};
