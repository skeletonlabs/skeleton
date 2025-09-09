import type { ItemGroupProps } from '@zag-js/combobox';
import { createContext } from 'react';

export interface ComboboxItemGroupContextType {
	itemGroupProps: ItemGroupProps;
}

export const ComboboxItemGroupContext = createContext<ComboboxItemGroupContextType>(null!);
