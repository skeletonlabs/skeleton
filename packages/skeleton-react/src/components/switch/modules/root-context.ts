import type { Api } from '@zag-js/switch';
import { createContext } from 'react';

export interface SwitchRootContextType {
	api: Api;
}

export const SwitchRootContext = createContext<SwitchRootContextType>(null!);
