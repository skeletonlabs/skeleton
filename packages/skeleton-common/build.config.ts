import { defineBuildConfig } from 'unbuild';
import prefixStringLiterals from './build/rollup-plugin-prefix-string-literals.js';

export default defineBuildConfig({
	entries: ['./src/index.ts'],
	declaration: true,
	clean: true,
	rollup: {
		emitCJS: true,
		inlineDependencies: true
	},
	hooks: {
		'rollup:options'(_, options) {
			options.plugins?.push(
				prefixStringLiterals('skb', {
					include: ['**/src/classes/**']
				})
			);
		}
	}
});
