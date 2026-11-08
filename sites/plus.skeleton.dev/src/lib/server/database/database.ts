import { dev } from '$app/env';
import { DATABASE_URL } from '$app/env/private';
import { relations } from '#lib/server/database/relations.ts';
import { neon } from '@neondatabase/serverless';
import { drizzle as drizzleProduction } from 'drizzle-orm/neon-http';
import { drizzle as drizzleLocal } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const database = dev
	? drizzleLocal({ client: postgres(DATABASE_URL!), relations })
	: drizzleProduction({ client: neon(DATABASE_URL!), relations });
