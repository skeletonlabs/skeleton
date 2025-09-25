import type { useTreeView } from './use-tree-view.svelte';
import { createContext } from '@/internal/create-context';

export const TreeViewRootContext = createContext<ReturnType<typeof useTreeView>>();
