import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import * as relations from '$lib/server/database/relations';
import { neon } from '@neondatabase/serverless';
import { drizzle as drizzleProduction } from 'drizzle-orm/neon-http';
import { drizzle as drizzleLocal } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const database = dev
	? // @ts-expect-error - https://github.com/drizzle-team/drizzle-orm/issues/5693
		drizzleLocal({
			client: postgres(env.DATABASE_URL!),
			relations,
		})
	: // @ts-expect-error - https://github.com/drizzle-team/drizzle-orm/issues/5693
		drizzleProduction({
			client: neon(env.DATABASE_URL!),
			relations,
		});
