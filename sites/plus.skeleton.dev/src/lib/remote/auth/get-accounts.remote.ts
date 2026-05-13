import { getRequestEvent, query } from '$app/server';
import { getUser } from './get-user.remote';
import { redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth/auth';
import { resolve } from '$app/paths';

export const getAccounts = query(async () => {
	const event = getRequestEvent();
	const user = await getUser();

	if (!user) {
		redirect(303, resolve('/auth/sign-in'));
	}

	const accounts = await auth.api.listUserAccounts({
		headers: event.request.headers,
	});

	return accounts;
});
