import { defineConfig } from 'vitest/config';
import { join } from 'node:path';

export default defineConfig({
	test: {
		dir: join(import.meta.dirname, 'test'),
		pool: 'threads',
		isolate: false,
	},
});
