import type { Api } from '@zag-js/switch';
import { createContext } from '@/internal/create-context';

export interface SwitchRootContextType {
	api: Api;
}

export const SwitchRootContext = createContext<SwitchRootContextType>();
