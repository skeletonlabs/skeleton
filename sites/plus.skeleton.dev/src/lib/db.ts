import { DATABASE_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const db = drizzle({
	client: postgres(DATABASE_URL, {
		prepare: false,
	}),
});
