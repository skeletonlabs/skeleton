import { createContext } from '../../internal/create-context.js';
import type { NodeContext, TreeViewContext } from './types.js';

// @ts-expect-error default value requirement is annoying
export const [setTreeContext, getTreeContext] = createContext<TreeViewContext>({});

export const [setNodeContext, getNodeContext] = createContext<NodeContext | undefined>(undefined);
