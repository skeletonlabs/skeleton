// import * as tree from '@zag-js/tree-view';
import { createContext } from '../../internal/create-context.js';
import type { NodeContext, TreeViewContext } from './types.js';

// const throwOnDefault = (): never => {
// 	throw new Error('This default value should never be used.');
// };

// @ts-expect-error default value requirement is annoying
export const [setTreeContext, getTreeContext] = createContext<TreeViewContext>({});

export const [setNodeContext, getNodeContext] = createContext<NodeContext | undefined>(undefined);
