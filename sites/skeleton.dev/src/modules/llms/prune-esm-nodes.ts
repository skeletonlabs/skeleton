import type { Root, Node } from 'mdast';
import { visit } from 'unist-util-visit';

export function pruneESMNodes(root: Root) {
	const nodesToRemove = new WeakSet<Node>();
	visit(root, (node) => {
		if (node.type === 'mdxjsEsm') {
			nodesToRemove.add(node);
		}
	});
	function filterChildren(node: Node) {
		if ('children' in node && Array.isArray(node.children)) {
			node.children = node.children.filter((child) => !nodesToRemove.has(child)).map(filterChildren);
		}
		return node;
	}
	filterChildren(root);
}
