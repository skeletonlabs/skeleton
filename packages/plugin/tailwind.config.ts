import { Config } from 'tailwindcss';
import skeleton from './src/tailwind/core.js';

const config = {
	darkMode: 'class',
	content: [],
	plugins: [skeleton]
} satisfies Config;

export default config;
