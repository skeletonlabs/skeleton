import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '$lib/server/database/schema';

export const database = drizzle({
	client: postgres(env.DATABASE_URL!, {
		prepare: false,
	}),
	schema,
});
