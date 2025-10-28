import { createContext } from '@/internal/create-context.js';
import type { ItemGroupProps } from '@zag-js/listbox';

export const ItemGroupContext = createContext<() => ItemGroupProps>();
