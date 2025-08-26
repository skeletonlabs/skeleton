import { walk } from 'estree-walker';
import MagicString from 'magic-string';
import { createFilter } from "@rollup/pluginutils";
import { RollupOptions } from 'unbuild';


interface PrefixStringLiteralOptions {
    include?: string[];
    exclude?: string[];
}

export default function(prefix: string, options: PrefixStringLiteralOptions): RollupOptions['plugins'][number] {
    const filter = createFilter(options.include, options.exclude);
    return {
        name: 'prefix-string-literals',
                transform(code, id) {
                    if (!filter(id)) return null;
    
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
                                        .map((v) => `${prefix}:${v}`)
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
    }
} 