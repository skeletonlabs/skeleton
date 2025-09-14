import type { ItemGroupProps } from '@zag-js/combobox';

import { createContext } from '@/internal/create-context';

export const ComboboxItemGroupContext = createContext<() => ItemGroupProps>();
