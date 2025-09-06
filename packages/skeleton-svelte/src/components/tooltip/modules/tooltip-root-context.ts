import { createContext } from '@/internal/create-context';
import type { Api } from '@zag-js/tooltip';

export interface TooltipRootContextType {
	api: Api;
}

export const TooltipRootContext = createContext<TooltipRootContextType>();
