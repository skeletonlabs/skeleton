import { defineBuildConfig } from 'unbuild';
import { join, relative } from 'node:path';
import { walk } from 'estree-walker';
import MagicString from 'magic-string';

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
			options.plugins?.push({
				name: 'prefix-string-literals',
				transform(code, id) {
					const path = relative(import.meta.dirname, id);
					if (!path.startsWith(join('src', 'classes'))) {
						return null;
					}
					const s = new MagicString(code);

					const ast = this.parse(code);
					walk(ast, {
						enter(node) {
							if (
								node.type === 'Literal' &&
								typeof node.value === 'string' &&
								node.value.length > 0 &&
								'start' in node &&
								'end' in node &&
								typeof node.start === 'number' &&
								typeof node.end === 'number' &&
								node
							) {
								s.overwrite(
									node.start + 1,
									node.end - 1,
									node.value
										.split(' ')
										.map((v) => `skb:${v}`)
										.join(' ')
								);
							}
						}
					});
					return {
						code: s.toString(),
						map: s.generateMap()
					};
				}
			});
		}
	}
});
