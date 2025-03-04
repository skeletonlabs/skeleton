import { createContext } from 'react';
import type { TabsContextState } from './types.js';
import type * as tabs from '@zag-js/tabs';

export const TabsContext = createContext<TabsContextState>({
	fluid: false,
	api: {} as ReturnType<typeof tabs.connect>,
});
