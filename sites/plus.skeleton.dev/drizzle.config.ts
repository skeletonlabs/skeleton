import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'postgresql',
	schema: './src/lib/database/schema.ts',
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
});
