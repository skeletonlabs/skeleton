import { defineConfig } from 'tsdown';
import Raw from 'unplugin-raw/rolldown';
// @ts-expect-error - We use .ts here instead of .js because tsdown's config resolver runs the typescript directly without transpiling
import StringTransform from './build/rolldown-plugin-string-transform.ts';

export default defineConfig({
	copy: ['src/index.css'],
	plugins: [
		Raw(),
		StringTransform({
			transform(str) {
				const PREFIX = 'skb:';
				const ESCAPE_PREFIX = 'not-skb:';
				return str
					.split(' ')
					.map((str) => {
						if (str.startsWith(ESCAPE_PREFIX)) {
							return str.slice(ESCAPE_PREFIX.length);
						}
						return `${PREFIX}${str}`;
					})
					.join(' ');
			},
			include: ['**/src/classes/**']
		})
	]
});
