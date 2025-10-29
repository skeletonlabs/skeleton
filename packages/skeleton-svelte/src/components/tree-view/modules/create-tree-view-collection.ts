import { collection, type TreeNode } from '@zag-js/tree-view';

export function createTreeViewCollection<T extends TreeNode = TreeNode>(...args: Parameters<typeof collection<T>>) {
	return collection(...args);
}
