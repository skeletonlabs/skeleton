import * as tabs from '@zag-js/tabs';
import { createContext } from '$lib/internal/create-context.js';
import type { TabsContextState } from './types.js';

export const [setTabsContextState, getTabsContextState, key] = createContext<TabsContextState>({
	fluid: false,
	api: {} as ReturnType<typeof tabs.connect>
});
