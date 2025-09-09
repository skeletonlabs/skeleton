import { createContext } from 'react';
import type { Api } from '@zag-js/popover';

export interface PopoverRootContextType {
	api: Api;
}

export const PopoverRootContext = createContext<PopoverRootContextType>(null!);
