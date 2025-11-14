import { defineConfig } from 'tsdown';

export default defineConfig({
	clean: false,
	logLevel: 'error',
	copy: ['src/index.css'],
});
