import { getRequestEvent, query } from '$app/server';
import { getUser } from './get-user.remote';
import { error } from '@sveltejs/kit';
import { auth } from '$lib/server/auth/auth';

export const getAccounts = query(async () => {
	const event = getRequestEvent();
	const user = await getUser();

	if (!user) {
		error(401, 'Unauthorized');
	}

	const accounts = await auth.api.listUserAccounts({
		headers: event.request.headers,
	});

	return accounts;
});
