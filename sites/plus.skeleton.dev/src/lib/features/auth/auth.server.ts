import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '$lib/infrastructure/database/db';
import { env } from '$env/dynamic/private';
import * as schema from '$lib/infrastructure/database/schema';
import { getRequestEvent } from '$app/server';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import type { SupportedOAuthProvider } from '$lib/features/auth/supported-oauth-providers';
import { oAuthProxy } from 'better-auth/plugins';

export const auth = betterAuth({
	baseURL: {
		allowedHosts: ['localhost:*', '*.vercel.app','plus.skeleton.dev'],
	},
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema,
	}),
	socialProviders: {
		github: {
			clientId: env.GITHUB_CLIENT_ID!,
			clientSecret: env.GITHUB_CLIENT_SECRET!,
		},
		discord: {
			clientId: env.DISCORD_CLIENT_ID!,
			clientSecret: env.DISCORD_CLIENT_SECRET!,
		},
	} satisfies Record<SupportedOAuthProvider['id'], unknown>,
	plugins: [
		oAuthProxy({
			productionURL: 'https://plus.skeleton.dev',
		}),
		/**
		 * Important: `sveltekitCookies` must be the last plugin
		 * @see https://better-auth.com/docs/integrations/svelte-kit#server-action-cookies
		 */
		sveltekitCookies(getRequestEvent),
	],
});
