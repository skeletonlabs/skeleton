import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'postgresql',
	schema: './src/lib/infrastructure/database/schema.ts',
	dbCredentials: {
		url: process.env.DATABASE_URL!,
		ssl: 'require',
	},
});
