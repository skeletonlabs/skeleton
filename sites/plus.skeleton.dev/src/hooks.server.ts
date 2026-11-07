import type { Handle } from '@sveltejs/kit/hooks';
import { auth } from '#lib/server/auth/auth.ts';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { building } from '$app/env';

export const handle: Handle = async ({ event, resolve }) => {
	const session = await auth.api.getSession({
		headers: event.request.headers,
	});

	event.locals.session = session ? session.session : null;
	event.locals.user = session ? session.user : null;

	return svelteKitHandler({
		event,
		resolve,
		auth,
		building,
	});
};
