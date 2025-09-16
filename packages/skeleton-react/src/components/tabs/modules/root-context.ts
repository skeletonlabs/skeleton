import type { useTabs } from './use-tabs';
import { createContext } from '@/internal/create-context';

export const TabsRootContext = createContext<ReturnType<typeof useTabs>>();
