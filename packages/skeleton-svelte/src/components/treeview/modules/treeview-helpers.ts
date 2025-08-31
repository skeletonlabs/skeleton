import * as tree from '@zag-js/tree-view';

type TreeViewCollectionOptions<T> = Parameters<typeof tree.collection<T>>[0];
type TreeViewCollection<T> = ReturnType<typeof tree.collection<T>>;
type TreeViewNodeProps = tree.NodeProps;

function createTreeViewCollection<T>(options: TreeViewCollectionOptions<T>): TreeViewCollection<T> {
	return tree.collection(options);
}

export { createTreeViewCollection, type TreeViewCollectionOptions, type TreeViewCollection, type TreeViewNodeProps };
