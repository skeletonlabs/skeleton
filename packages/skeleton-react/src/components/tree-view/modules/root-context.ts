import { createContext } from '../../../internal/create-context.js';
import type { useTreeView } from './provider.js';

export const TreeViewRootContext = createContext<ReturnType<typeof useTreeView>>();
