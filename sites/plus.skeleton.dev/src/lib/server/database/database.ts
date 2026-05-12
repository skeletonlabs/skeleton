import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import * as schema from '$lib/server/database/schema';
import { neon } from '@neondatabase/serverless';
import { drizzle as drizzleProduction } from 'drizzle-orm/neon-http';
import { drizzle as drizzleLocal } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const database = dev
	? drizzleLocal({
			client: postgres(env.DATABASE_URL!),
			schema,
		})
	: drizzleProduction({
			client: neon(env.DATABASE_URL!),
			schema,
		});
