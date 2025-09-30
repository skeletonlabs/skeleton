import { defineConfig } from 'tsdown';

export default defineConfig({
	copy: ['src/index.css'],
	unbundle: true,
});
