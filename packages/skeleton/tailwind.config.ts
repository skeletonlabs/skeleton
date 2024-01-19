import { Config } from 'tailwindcss';
import { corePlugin } from './src/plugin/extends/core.js';

const config = {
	darkMode: 'class',
	content: [],
	plugins: [corePlugin]
} satisfies Config;

export default config;
