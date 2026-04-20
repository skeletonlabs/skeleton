import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { database } from '$lib/server/database/database';
import { env } from '$env/dynamic/private';
import * as schema from '$lib/server/database/schema/schema';
import { getRequestEvent } from '$app/server';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import type { SupportedOAuthProvider } from './supported-oauth-providers';
import { getOrigin } from '$lib/app/get-origin';

export const auth = betterAuth({
	baseURL: getOrigin(),
	database: drizzleAdapter(database, {
		provider: 'pg',
		schema,
	}),
	socialProviders: {
		github: {
			clientId: env.GITHUB_CLIENT_ID!,
			clientSecret: env.GITHUB_CLIENT_SECRET!,
			redirectURI: `${getOrigin()}/api/auth/callback/github`,
		},
		discord: {
			clientId: env.DISCORD_CLIENT_ID!,
			clientSecret: env.DISCORD_CLIENT_SECRET!,
			redirectURI: `${getOrigin()}/api/auth/callback/discord`,
		},
	} satisfies Record<SupportedOAuthProvider['id'], unknown>,
	plugins: [sveltekitCookies(getRequestEvent)],
});
