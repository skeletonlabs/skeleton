import type { GetMarkdownFromDocContext } from './get-markdown-from-doc';
import type { Root, RootContent } from 'mdast';
import { visit, SKIP } from 'unist-util-visit';

export function processFrameworkComponents(root: Root, context: GetMarkdownFromDocContext) {
	const frameworkIds = new Set(context.frameworks.map((framework) => framework.id));
	visit(root, (node, index, parent) => {
		if (node.type !== 'mdxJsxFlowElement' || node.name !== 'Framework') {
			return;
		}
		if (typeof index !== 'number' || !parent) {
			return;
		}
		const idAttribute = node.attributes.find((attribute) => attribute.type === 'mdxJsxAttribute' && attribute.name === 'id');
		if (idAttribute && idAttribute.value && typeof idAttribute.value === 'string') {
			if (frameworkIds.has(idAttribute.value)) {
				if ('children' in node && Array.isArray(node.children)) {
					parent.children.splice(index, 1, ...(node.children as RootContent[]));
				} else {
					parent.children.splice(index, 1);
				}
			} else {
				parent.children.splice(index, 1);
			}
			return [SKIP, index];
		}
	});
}
