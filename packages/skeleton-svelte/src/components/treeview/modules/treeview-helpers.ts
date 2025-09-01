import { collection, type NodeProps } from '@zag-js/tree-view';

type TreeViewCollectionOptions<T> = Parameters<typeof collection<T>>[0];
type TreeViewCollection<T> = ReturnType<typeof collection<T>>;
type TreeViewNodeProps = NodeProps;

function createTreeViewCollection<T>(options: TreeViewCollectionOptions<T>): TreeViewCollection<T> {
	return collection(options);
}

export { createTreeViewCollection, type TreeViewCollectionOptions, type TreeViewCollection, type TreeViewNodeProps };
