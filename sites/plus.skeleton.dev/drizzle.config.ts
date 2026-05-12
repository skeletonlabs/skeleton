/// <reference types="node" />
import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	schema: './src/lib/infrastructure/database/schema.ts',
	dialect: 'postgresql',
	dbCredentials: { url: process.env.DATABASE_URL, ssl: process.env.NODE_ENV === 'production' ? 'require' : false },
	verbose: true,
	strict: true,
});
