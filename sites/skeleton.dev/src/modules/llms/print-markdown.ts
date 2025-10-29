import type { Root } from 'mdast';
import { toMarkdown } from 'mdast-util-to-markdown';

export function printMarkdown(root: Root) {
	return toMarkdown(root);
}
