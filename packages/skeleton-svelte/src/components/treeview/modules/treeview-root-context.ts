import { createContext } from '../../../internal/create-context.js';
import type * as tree from '@zag-js/tree-view';

export interface TreeViewRootContextType {
	api: tree.Api;
}

const TreeViewRootContext = createContext<TreeViewRootContextType>();
export { TreeViewRootContext };
