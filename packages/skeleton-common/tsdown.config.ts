import { defineConfig } from 'tsdown';
import Raw from 'unplugin-raw/rolldown';
import StringEdit from './src/plugins/rolldown-plugin-string-transform.ts';

export default defineConfig({
	publint: true,
	copy: ['src/index.css'],
	plugins: [
		Raw(),
		StringEdit({
			transform(str) {
				const PREFIX = 'skb';
				const ESCAPE_PREFIX = 'not-skb';
				return str
					.split(' ')
					.map((str) => {
						if (str.startsWith(ESCAPE_PREFIX)) {
							return str.slice(ESCAPE_PREFIX.length);
						}
						return `${PREFIX}:${str}`;
					})
					.join(' ');
			},
			include: ['**/src/classes/**']
		})
	]
});
