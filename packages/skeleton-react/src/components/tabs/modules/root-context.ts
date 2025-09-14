import { createContext } from '@/internal/create-context';

import type { useTabs } from './use-tabs';

export const TabsRootContext = createContext<ReturnType<typeof useTabs>>();
