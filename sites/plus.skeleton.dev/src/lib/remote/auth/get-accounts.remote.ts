import { query } from '$app/server';
import { getUser } from './get-user.remote';
import { error } from '@sveltejs/kit';
import { database } from '$lib/server/database/database';
import { account } from '$lib/server/database/schema';
import { eq } from 'drizzle-orm';

export const getAccounts = query(async () => {
	const user = await getUser();

	if (!user) {
		error(401, 'Unauthorized');
	}

	const accounts = database
		.select({
			id: account.id,
			providerId: account.providerId,
		})
		.from(account)
		.where(eq(account.userId, user.id));

	return accounts;
});
