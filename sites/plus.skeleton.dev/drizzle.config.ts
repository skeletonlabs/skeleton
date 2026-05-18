import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './src/lib/server/database/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL!,
		ssl: process.env.NODE_ENV === 'production' ? 'require' : false,
	},
});
