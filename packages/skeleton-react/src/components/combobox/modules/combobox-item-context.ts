import type { ItemState } from '@zag-js/combobox';
import { createContext } from 'react';

export interface ComboboxItemContextType {
	itemState: ItemState;
}

export const ComboboxItemContext = createContext<ComboboxItemContextType>(null!);
