import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { database } from '$lib/server/database';
import { env } from '$env/dynamic/private';
import * as schema from '$lib/server/schema';
import { getRequestEvent } from '$app/server';
import { sveltekitCookies } from 'better-auth/svelte-kit';

export const auth = betterAuth({
	database: drizzleAdapter(database, {
		provider: 'pg',
		schema: schema,
	}),
	socialProviders: {
		github: {
			clientId: env.GITHUB_CLIENT_ID,
			clientSecret: env.GITHUB_CLIENT_SECRET,
			redirectURI: `${env.BETTER_AUTH_URL}/api/auth/callback/github`,
		},
	},
	plugins: [sveltekitCookies(getRequestEvent)],
});
