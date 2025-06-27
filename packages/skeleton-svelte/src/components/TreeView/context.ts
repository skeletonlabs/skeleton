import { createContext } from '../../internal/create-context.js';
import type { TreeViewContext } from './types.js';

// @ts-expect-error - Defaults for context don't make sense, `createContext` should just throw TBH
export const [setTreeViewContext, getTreeViewContext, key] = createContext<TreeViewContext>();
