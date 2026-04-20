import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '$lib/infrastructure/database/db';
import { env } from '$env/dynamic/private';
import * as schema from '$lib/infrastructure/database/schema';
import { getRequestEvent } from '$app/server';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import type { SupportedOAuthProvider } from '$lib/features/auth/supported-oauth-providers';
import { getAppOrigin } from '$lib/infrastructure/http/get-app-origin';

export const auth = betterAuth({
	baseURL: getAppOrigin(),
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema,
	}),
	socialProviders: {
		github: {
			clientId: env.GITHUB_CLIENT_ID!,
			clientSecret: env.GITHUB_CLIENT_SECRET!,
			redirectURI: `${getAppOrigin()}/api/auth/callback/github`,
		},
		discord: {
			clientId: env.DISCORD_CLIENT_ID!,
			clientSecret: env.DISCORD_CLIENT_SECRET!,
			redirectURI: `${getAppOrigin()}/api/auth/callback/discord`,
		},
	} satisfies Record<SupportedOAuthProvider['id'], unknown>,
	plugins: [sveltekitCookies(getRequestEvent)],
});
