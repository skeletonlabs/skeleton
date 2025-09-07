import type { Api } from '@zag-js/combobox';
import { createContext } from 'react';

export interface ComboboxRootContextType {
	api: Api;
}

export const ComboboxRootContext = createContext<ComboboxRootContextType>(null!);
