import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	DATABASE_URL: { schema: (input) => input ?? '' },
	VERCEL_PROJECT_PRODUCTION_URL: { schema: (input) => input ?? '' },
	GITHUB_CLIENT_ID: { schema: (input) => input ?? '' },
	GITHUB_CLIENT_SECRET: { schema: (input) => input ?? '' },
	DISCORD_CLIENT_ID: { schema: (input) => input ?? '' },
	DISCORD_CLIENT_SECRET: { schema: (input) => input ?? '' },
});
