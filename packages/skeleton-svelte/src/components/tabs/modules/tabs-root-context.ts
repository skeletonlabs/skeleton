import { createContext } from '@/internal/create-context.js';
import type { Api } from '@zag-js/tabs';

export interface TabsRootContextType {
	api: Api;
}

export const TabsRootContext = createContext<TabsRootContextType>();
