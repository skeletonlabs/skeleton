import { defineConfig } from 'tsdown';

export default defineConfig({
	logLevel: 'error',
	clean: false,
	copy: ['src/index.css'],
	unbundle: true,
});
