import { defineEnvVars } from "@sveltejs/kit/env";

export const variables = defineEnvVars({
	DATABASE_URL: {},
	GITHUB_CLIENT_ID: {},
	GITHUB_CLIENT_SECRET: {},
	DISCORD_CLIENT_ID: {},
	DISCORD_CLIENT_SECRET: {},
	VERCEL_ENV: {},
	VERCEL_URL: {},
	VERCEL_PROJECT_PRODUCTION_URL: {},
});
