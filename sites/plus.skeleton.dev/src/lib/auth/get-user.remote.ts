import { getRequestEvent, query } from '$app/server';

export const getUser = query(async () => {
	const event = getRequestEvent();

	const userResult = await event.locals.supabase.auth.getUser();

	if (userResult.error) {
		return null;
	}

	return userResult.data.user;
});
