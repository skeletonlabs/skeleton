import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '$lib/infrastructure/database/db';
import { env } from '$env/dynamic/private';
import * as schema from '$lib/infrastructure/database/schema';
import { getRequestEvent } from '$app/server';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import type { SupportedOAuthProvider } from '$lib/features/auth/supported-oauth-providers';
import { getAppOrigin } from '$lib/infrastructure/http/get-app-origin';
import { oAuthProxy } from 'better-auth/plugins';

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
		},
		discord: {
			clientId: env.DISCORD_CLIENT_ID!,
			clientSecret: env.DISCORD_CLIENT_SECRET!,
		},
	} satisfies Record<SupportedOAuthProvider['id'], unknown>,
	trustedOrigins: ['http://localhost:5173', 'https://plusskeleton-*-skeleton-labs.vercel.app', 'https://plus.skeleton.dev'],
	plugins: [
		oAuthProxy({
			productionURL: 'https://plus.skeleton.dev',
		}),
		sveltekitCookies(getRequestEvent),
	],
});
