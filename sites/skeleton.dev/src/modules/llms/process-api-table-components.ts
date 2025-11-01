import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';

export function processApiTableComponents(root: Root) {
	visit(root, 'mdxJsxFlowElement', (node) => {
		if (node.name !== 'ApiTable') {
			return;
		}
		// TODO: Turn ApiTable into a Markdown table, use `await getCollection('components', `${framework}/${componentName}`)` to get neccessary data
	});
}
