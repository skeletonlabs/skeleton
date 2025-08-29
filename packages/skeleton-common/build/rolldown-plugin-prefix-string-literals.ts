import { walk, type Node } from 'estree-walker';
import MagicString from 'magic-string';
import { createFilter } from "@rollup/pluginutils";
import type { RolldownPlugin } from 'rolldown';

interface PrefixStringLiteralOptions {
    prefix: string;
    escapePrefix?: string;
    include?: string[];
    exclude?: string[];
}

export default function(options: PrefixStringLiteralOptions): RolldownPlugin {
    const filter = createFilter(options.include, options.exclude);
    return {
        name: 'prefix-string-literals',
        transform(code, id) {
            if (!filter(id)) return null;

            const s = new MagicString(code);
            const ast = this.parse(code);

            walk(ast as Node, {
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
                        const value = node.value
                        .split(' ')
                        .map((v) => {
                            if (options.escapePrefix && v.startsWith(options.escapePrefix)) {
                                return v.slice(options.escapePrefix.length);
                            }
                            return `${options.prefix}:${v}`;
                        })
                        .join(' ');
                        s.overwrite(node.start + 1, node.end - 1, value);
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