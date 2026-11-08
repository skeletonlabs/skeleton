import { dev } from '$app/env';
import { getRequestEvent } from '$app/server';

import {
	VERCEL_PROJECT_PRODUCTION_URL,
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET,
	DISCORD_CLIENT_ID,
	DISCORD_CLIENT_SECRET,
} from '$app/env/private';

import type { SupportedOAuthProvider } from '#lib/auth/supported-oauth-providers.ts';
import { database } from '#lib/server/database/database.ts';
import * as schema from '#lib/server/database/schema.ts';
import { betterAuth } from 'better-auth/minimal';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { genericOAuth } from 'better-auth/plugins';
import { sveltekitCookies } from 'better-auth/svelte-kit';

export const auth = betterAuth({
	baseURL: import.meta.env.DEV ? 'http://localhost:5173' : `https://${VERCEL_PROJECT_PRODUCTION_URL}`,
	database: drizzleAdapter(database, { provider: 'pg', schema }),
	plugins: [
		...(dev
			? [
					genericOAuth({
						config: [
							{
								providerId: 'local',
								discoveryUrl: 'http://localhost:8080/local/.well-known/openid-configuration',
								clientId: 'local-client-id',
								clientSecret: 'local-client-secret',
								scopes: ['openid', 'profile'],
							},
						],
					}),
				]
			: []),

		/**
		 * `sveltekitCookies` must be the last plugin
		 * @see https://better-auth.com/docs/integrations/svelte-kit#server-action-cookies
		 */
		sveltekitCookies(getRequestEvent),
	],
	socialProviders: {
		github: {
			clientId: GITHUB_CLIENT_ID!,
			clientSecret: GITHUB_CLIENT_SECRET!,
		},
		discord: {
			clientId: DISCORD_CLIENT_ID!,
			clientSecret: DISCORD_CLIENT_SECRET!,
		},
	} satisfies Record<Exclude<SupportedOAuthProvider['id'], 'local'>, unknown>,
});
