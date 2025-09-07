import { createContext } from '@/internal/create-context';
import type * as tree from '@zag-js/tree-view';

export interface TreeViewNodeContextType {
	nodeProps: tree.NodeProps;
}

export const TreeViewNodeContext = createContext<TreeViewNodeContextType>();
