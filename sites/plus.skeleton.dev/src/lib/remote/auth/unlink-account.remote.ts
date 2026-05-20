import { form, getRequestEvent } from '$app/server';
import { error } from '@sveltejs/kit';
import { auth } from '$lib/server/auth/auth';
import { UnlinkAccountSchema } from '$lib/schemas/auth/unlink-account-schema';

export const unlinkAccount = form(UnlinkAccountSchema, async (data) => {
	const event = getRequestEvent();

	try {
		await auth.api.unlinkAccount({
			headers: event.request.headers,
			body: {
				providerId: data.providerId,
			},
		});
	} catch (e) {
		if (e instanceof Error) {
			throw error(400, e.message);
		}
		throw error(400, 'An unknown error occurred while unlinking the account');
	}
});
