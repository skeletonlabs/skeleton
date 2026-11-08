import { defineEnvVars } from "@sveltejs/kit/env";

export const variables = defineEnvVars({
	DATABASE_URL: {},
	GITHUB_CLIENT_ID: {},
	GITHUB_CLIENT_SECRET: {},
	DISCORD_CLIENT_ID: {},
	DISCORD_CLIENT_SECRET: {},
});
