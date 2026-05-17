import { form, getRequestEvent } from '$app/server';
import { error } from '@sveltejs/kit';
import { auth } from '$lib/server/auth/auth';
import { UnlinkAccountSchema } from '$lib/schemas/auth/unlink-account-schema';

export const unlinkAccount = form(UnlinkAccountSchema, async (data) => {
	const event = getRequestEvent();

	const unlink = await auth.api.unlinkAccount({
		headers: event.request.headers,
		body: {
			providerId: data.providerId,
		},
	});

	if (!unlink.status) {
		error(500, 'Failed to unlink account');
	}
});
