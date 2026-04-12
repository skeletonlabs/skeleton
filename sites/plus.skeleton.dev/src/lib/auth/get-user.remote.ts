import { getRequestEvent, query } from '$app/server';
import * as v from 'valibot';
import { User } from '$lib/auth/user-schema';

export const getUser = query(async () => {
	const event = getRequestEvent();

	const userResult = await event.locals.supabase.auth.getUser();

	if (userResult.error) {
		return null;
	}

	return v.parse(User, userResult.data.user);
});
