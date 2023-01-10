import type { RequestHandler } from './$types';

export const GET = (async ({ fetch }) => {
	let rssFeed = await (await fetch('https://skeleton.ghost.io/rss/')).text();
	rssFeed = rssFeed
		.replaceAll('<link>https://skeleton.ghost.io', '<link>https://www.skeleton.dev/blog')
		.replaceAll('<url>https://skeleton.ghost.io', '<url>https://www.skeleton.dev')
		.replaceAll('<atom:link href="https://skeleton.ghost.io', '<atom:link href="www.skeleton.dev/blog');

	// <atom:link href="https://skeleton.ghost.io
	return new Response(rssFeed, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}) satisfies RequestHandler;
