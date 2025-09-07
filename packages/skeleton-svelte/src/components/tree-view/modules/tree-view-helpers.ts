import { collection, type NodeProps } from '@zag-js/tree-view';

export type TreeViewCollectionOptions<T> = Parameters<typeof collection<T>>[0];
export type TreeViewCollection<T> = ReturnType<typeof collection<T>>;
export type TreeViewNodeProps = NodeProps;

export function createTreeViewCollection<T>(options: TreeViewCollectionOptions<T>): TreeViewCollection<T> {
	return collection(options);
}
