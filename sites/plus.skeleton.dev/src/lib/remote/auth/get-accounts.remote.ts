import { getRequestEvent, query } from '$app/server';
import { getUser } from './get-user.remote';
import { error, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth/auth';
import { resolve } from '$app/paths';
import { ResultAsync } from 'neverthrow';

export const getAccounts = query(async () => {
	const event = getRequestEvent();

	const userResult = await ResultAsync.fromPromise(getUser(), (e) => new Error('Failed to fetch user', { cause: e }));

	if (userResult.isErr()) {
		error(500, userResult.error.message);
	}

	if (!userResult.value) {
		redirect(303, resolve('/auth/sign-in'));
	}

	const accountsResult = await ResultAsync.fromPromise(
		auth.api.listUserAccounts({
			headers: event.request.headers,
		}),
		(e) => new Error('Failed to fetch user accounts', { cause: e }),
	);

	if (accountsResult.isErr()) {
		error(500, accountsResult.error.message);
	}

	return accountsResult.value;
});
