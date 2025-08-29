import { defineConfig } from 'tsdown';
import raw from 'unplugin-raw/rolldown';
import prefixStringLiterals from './build/rolldown-plugin-prefix-string-literals.js';

export default defineConfig({
	publint: true,
	copy: ['src/index.css'],
	plugins: [
		raw(),
		prefixStringLiterals({
			prefix: 'skb',
			escapePrefix: '!!',
			include: ['**/src/classes/**']
		})
	]
});
