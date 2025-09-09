import type { Api } from '@zag-js/combobox';
import { createContext } from '@/internal/create-context';

export interface ComboboxRootContextType {
	api: Api;
}

export const ComboboxRootContext = createContext<ComboboxRootContextType>();
