import type { Api } from '@zag-js/tooltip';
import { createContext } from 'react';

export interface TooltipRootContextType {
	api: Api;
}

export const TooltipRootContext = createContext<TooltipRootContextType>(null!);
