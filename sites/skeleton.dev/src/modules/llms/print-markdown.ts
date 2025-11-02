import type { Root } from 'mdast';
import { gfmToMarkdown } from 'mdast-util-gfm';
import { mdxToMarkdown } from 'mdast-util-mdx';
import { toMarkdown } from 'mdast-util-to-markdown';

export function printMarkdown(root: Root) {
	return toMarkdown(root, {
		extensions: [mdxToMarkdown(), gfmToMarkdown()],
	});
}
