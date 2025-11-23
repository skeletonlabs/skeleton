import { defineConfig } from 'vitest/config';
import { join } from 'node:path';

export default defineConfig({
	test: {
		dir: join(import.meta.dirname, 'test'),
		isolate: false,
	},
});
