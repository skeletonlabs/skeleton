import { collection } from '@zag-js/tree-view';

export function createTreeViewCollection<T>(...args: Parameters<typeof collection<T>>) {
	return collection(...args);
}
