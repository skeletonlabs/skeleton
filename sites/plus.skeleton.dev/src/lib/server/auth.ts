import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { database } from '$lib/server/database';
import { BETTER_AUTH_URL, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';
import * as schema from '$lib/server/schema';
import { getRequestEvent } from '$app/server';
import { sveltekitCookies } from 'better-auth/svelte-kit';

export const auth = betterAuth({
	baseURL: BETTER_AUTH_URL,
	database: drizzleAdapter(database, {
		provider: 'pg',
		schema: schema,
	}),
	socialProviders: {
		github: {
			clientId: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET,
			redirectURI: 'http://localhost:5173/api/auth/callback/github',
		},
	},
	plugins: [sveltekitCookies(getRequestEvent)],
});
