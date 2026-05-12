import { env } from '$env/dynamic/private';
import { drizzle as drizzleProduction } from 'drizzle-orm/neon-http';
import { drizzle as drizzleLocal} from 'drizzle-orm/postgres-js';
import { neon } from '@neondatabase/serverless';
import * as schema from '$lib/infrastructure/database/schema';
import { dev } from '$app/environment';
import postgres from 'postgres';

export const db = dev ?	
	drizzleLocal({
		client: postgres(env.DATABASE_URL!),
		schema
	}) : 
	drizzleProduction({
		client: neon(env.DATABASE_URL!),
		schema,
	});
