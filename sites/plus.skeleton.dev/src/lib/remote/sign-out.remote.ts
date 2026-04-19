import { form, getRequestEvent } from '$app/server';
import { error } from '@sveltejs/kit';
import { auth } from '$lib/server/auth';

export const signOut = form('unchecked', async () => {
	const event = getRequestEvent();

	const signOut = await auth.api.signOut({
		headers: event.request.headers,
	});

	if (!signOut.success) {
		error(500, 'Failed to sign out');
	}
});
