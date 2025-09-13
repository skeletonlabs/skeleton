import { createContext } from '@/internal/create-context';
import type { useTabs } from './use-tabs.svelte';

export const TabsRootContext = createContext<ReturnType<typeof useTabs>>();
