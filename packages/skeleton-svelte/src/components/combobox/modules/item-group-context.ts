import type { ItemGroupProps } from '@zag-js/combobox';
import { createContext } from '@/internal/create-context';

export interface ComboboxItemGroupContextType {
	itemGroupProps: ItemGroupProps;
}

export const ComboboxItemGroupContext = createContext<ComboboxItemGroupContextType>();
