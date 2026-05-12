import { form, getRequestEvent } from '$app/server';
import { error } from '@sveltejs/kit';
import { authentication } from '$lib/server/authentication/authentication';

export const signOut = form('unchecked', async () => {
	const event = getRequestEvent();

	const signOut = await authentication.api.signOut({
		headers: event.request.headers,
	});

	if (!signOut.success) {
		error(500, 'Failed to sign out');
	}
});
