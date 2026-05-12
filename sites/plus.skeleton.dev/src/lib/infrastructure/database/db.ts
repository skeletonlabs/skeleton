import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import * as schema from '$lib/infrastructure/database/schema';
import { neon } from '@neondatabase/serverless';
import { drizzle as drizzleProduction } from 'drizzle-orm/neon-http';
import { drizzle as drizzleLocal } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const db = dev
	? drizzleLocal({
			client: postgres(env.DATABASE_URL!),
			schema,
		})
	: drizzleProduction({
			client: neon(env.DATABASE_URL!),
			schema,
		});
