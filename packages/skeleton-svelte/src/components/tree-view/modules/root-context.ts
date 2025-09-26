import type { useTreeView } from './provider.svelte';
import { createContext } from '@/internal/create-context';

export const RootContext = createContext<ReturnType<typeof useTreeView>>();
