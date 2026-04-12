import { getRequestEvent, query } from '$app/server';

export const getSession = query(async () => {
	const event = getRequestEvent();

	const sessionResult = await event.locals.supabase.auth.getSession();

	if (sessionResult.error) {
		return { session: null, user: null };
	}

	const userResult = await event.locals.supabase.auth.getUser();

	if (userResult.error) {
		// JWT validation has failed
		return { session: null, user: null };
	}

	return {
		session: sessionResult.data.session,
		user: userResult.data.user,
	};
});
