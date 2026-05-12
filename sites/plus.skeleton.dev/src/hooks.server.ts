import { authentication } from '$lib/server/authentication/authentication';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { building } from '$app/environment';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const session = await authentication.api.getSession({
		headers: event.request.headers,
	});

	event.locals.session = session ? session.session : null;
	event.locals.user = session ? session.user : null;

	return svelteKitHandler({
		event,
		resolve,
		auth: authentication,
		building,
	});
};
