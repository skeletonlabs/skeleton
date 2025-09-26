import { createContext } from '@/internal/create-context';
import type { NodeProps } from '@zag-js/tree-view';

export const NodeContext = createContext<NodeProps>();
