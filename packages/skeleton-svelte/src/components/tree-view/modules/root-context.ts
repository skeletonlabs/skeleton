import { createContext } from '../../../internal/create-context.js';
import type { useTreeView } from './provider.svelte.js';

export const TreeViewRootContext = createContext<ReturnType<typeof useTreeView>>();
