import { form, getRequestEvent } from '$app/server';
import { error } from '@sveltejs/kit';
import { auth } from '$lib/server/auth/auth';

export const signOut = form('unchecked', async () => {
	const event = getRequestEvent();

	try {
		const signOut = await auth.api.signOut({
			headers: event.request.headers,
		});

		if (!signOut.success) {
			error(500, 'Failed to sign out');
		}
	} catch (e) {
		if (e instanceof Error) {
			throw error(400, e.message);
		}
		throw error(400, 'An unknown error occurred while signing out');
	}
});
