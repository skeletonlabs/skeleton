import { defineConfig } from 'tsdown';
import raw from 'unplugin-raw/rolldown';
import prefixStringLiterals from './build/rollup-plugin-prefix-string-literals.js';

export default defineConfig({
	copy: ['src/index.css'],
	plugins: [
		raw(),
		prefixStringLiterals('skb', {
			include: ['**/src/classes/**'],
			escapePrefix: '!!'
		})
	]
});
