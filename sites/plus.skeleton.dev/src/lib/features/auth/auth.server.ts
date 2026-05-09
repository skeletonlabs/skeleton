import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '$lib/infrastructure/database/db';
import { env } from '$env/dynamic/private';
import * as schema from '$lib/infrastructure/database/schema';
import { getRequestEvent } from '$app/server';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import type { SupportedOAuthProvider } from '$lib/features/auth/supported-oauth-providers';
import { oAuthProxy } from 'better-auth/plugins';
import { getBaseURL } from '$lib/infrastructure/http/get-base-url';

export const auth = betterAuth({
	baseURL: getBaseURL(),
	trustedOrigins: ['http://localhost:5173', 'https://*.vercel.app', 'https://plus.skeleton.dev'],
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
		sveltekitCookies(getRequestEvent),
		oAuthProxy({
			productionURL: 'https://plus.skeleton.dev',
		}),
	],
});
