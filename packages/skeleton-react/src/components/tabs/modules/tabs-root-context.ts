import { createContext } from 'react';
import type { Api } from '@zag-js/tabs';

export interface TabsRootContextType {
	api: Api;
}

export const TabsRootContext = createContext<TabsRootContextType>(null!);
