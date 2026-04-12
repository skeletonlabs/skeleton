import * as v from 'valibot';
import { form, getRequestEvent } from '$app/server';
import { error } from '@sveltejs/kit';

export const signOut = form(v.object({}), async () => {
	const event = getRequestEvent();

	const signOutResult = await event.locals.supabase.auth.signOut();

	if (signOutResult.error) {
		error(signOutResult.error.status ?? 400, signOutResult.error.message);
	}
});
