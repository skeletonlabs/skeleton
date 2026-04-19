import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const database = drizzle({
	client: postgres(env.DATABASE_URL, {
		prepare: false,
	}),
});
