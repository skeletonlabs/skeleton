import { form, getRequestEvent } from '$app/server';
import { error } from '@sveltejs/kit';
import { auth } from '$lib/server/auth/auth';
import { ResultAsync } from 'neverthrow';

export const signOut = form('unchecked', async () => {
	const event = getRequestEvent();

	const signOutResult = await ResultAsync.fromPromise(
		auth.api.signOut({
			headers: event.request.headers,
		}),
		(e) => new Error('Failed to sign out', { cause: e }),
	);

	if (signOutResult.isErr()) {
		error(500, signOutResult.error.message);
	}

	if (!signOutResult.value.success) {
		error(500, 'Failed to sign out');
	}
});
