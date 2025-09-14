import { defineConfig } from 'tsdown';

export default defineConfig({
	logLevel: 'silent',
	copy: ['src/index.css'],
	unbundle: true,
});
