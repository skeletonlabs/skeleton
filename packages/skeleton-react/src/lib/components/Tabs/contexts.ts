import { createContext } from 'react';
import { TabsContextState } from './types';
import * as tabs from '@zag-js/tabs';

export const TabsContext = createContext<TabsContextState>({
	fluid: false,
	api: {} as ReturnType<typeof tabs.connect>
});
