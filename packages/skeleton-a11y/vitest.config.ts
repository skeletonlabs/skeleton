import { defineConfig } from 'vitest/config';

const config = defineConfig({
	test: {
		include: ['src/**/*.test.ts'],
		environment: 'jsdom'
	}
});

export default config;
