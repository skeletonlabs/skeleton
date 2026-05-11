import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from '$lib/infrastructure/database/schema';

export const db = drizzle({
	client: neon(env.DATABASE_URL!),
	schema,
});
