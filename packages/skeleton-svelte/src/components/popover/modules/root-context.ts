import { createContext } from '@/internal/create-context';
import type { Api } from '@zag-js/popover';

export interface PopoverRootContextType {
	api: Api;
}

export const PopoverRootContext = createContext<PopoverRootContextType>();
