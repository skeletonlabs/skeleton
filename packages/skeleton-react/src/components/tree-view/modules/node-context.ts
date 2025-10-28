import { createContext } from '@/internal/create-context.js';
import type { NodeProps } from '@zag-js/tree-view';

export const NodeContext = createContext<NodeProps>();
