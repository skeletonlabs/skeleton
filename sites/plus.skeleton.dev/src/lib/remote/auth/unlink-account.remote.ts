import { form, getRequestEvent } from '$app/server';
import { error } from '@sveltejs/kit';
import { auth } from '$lib/server/auth/auth';
import { UnlinkAccountSchema } from '$lib/schemas/auth/unlink-account-schema';
import { ResultAsync } from 'neverthrow';

export const unlinkAccount = form(UnlinkAccountSchema, async (data) => {
	const event = getRequestEvent();

	const unlinkAccountResult = await ResultAsync.fromPromise(
		auth.api.unlinkAccount({
			headers: event.request.headers,
			body: {
				providerId: data.providerId,
			},
		}),
		(e) => new Error('Failed to unlink account', { cause: e }),
	);

	if (unlinkAccountResult.isErr()) {
		error(400, unlinkAccountResult.error.message);
	}
});
