import { form, getRequestEvent } from '$app/server';
import { error } from '@sveltejs/kit';
import { auth } from '#lib/server/auth/auth.ts';
import { UnlinkAccountSchema } from '#lib/schemas/auth/unlink-account-schema.ts';
import { ResultAsync } from 'neverthrow';
import { getAccounts } from './get-accounts.remote';

export const unlinkAccount = form(UnlinkAccountSchema, async (data) => {
	const event = getRequestEvent();

	const accounts = await getAccounts();

	const account = accounts.find((account) => account.providerId === data.providerId);

	if (!account) {
		error(400, `Account not found for provider with id: ${data.providerId}`);
	}

	const unlinkAccountResult = await ResultAsync.fromPromise(
		auth.api.unlinkAccount({
			headers: event.request.headers,
			body: {
				accountId: account?.id,
			},
		}),
		(e) => new Error('Failed to unlink account', { cause: e }),
	);

	if (unlinkAccountResult.isErr()) {
		error(400, unlinkAccountResult.error.message);
	}
});
