import { createContext } from '@/internal/create-context';
import type { NodeProps } from '@zag-js/tree-view';

export const TreeViewNodeContext = createContext<() => NodeProps>();
