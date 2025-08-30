import { createContext } from '../../../internal/create-context-new.js';
import type { TreeViewRootContext as TreeViewRootContextType, TreeViewNodeContext as TreeViewNodeContextType } from './types.js';

const TreeViewRootContext = createContext<TreeViewRootContextType>();
const TreeViewNodeContext = createContext<TreeViewNodeContextType>();

export { TreeViewRootContext, TreeViewNodeContext };
