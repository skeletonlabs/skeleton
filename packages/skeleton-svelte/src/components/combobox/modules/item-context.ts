import type { ItemState } from '@zag-js/combobox';
import { createContext } from '@/internal/create-context';

export interface ComboboxItemContextType {
	itemState: ItemState;
}

export const ComboboxItemContext = createContext<ComboboxItemContextType>();
