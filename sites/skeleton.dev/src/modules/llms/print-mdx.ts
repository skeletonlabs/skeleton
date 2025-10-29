import type { Root } from 'mdast';
import { mdxToMarkdown } from 'mdast-util-mdx';
import { toMarkdown } from 'mdast-util-to-markdown';

export function printMDX(root: Root) {
	return toMarkdown(root, {
		extensions: [mdxToMarkdown()],
	});
}
