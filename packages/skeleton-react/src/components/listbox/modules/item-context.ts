import { createContext } from '../../../internal/create-context.js';
import type { ItemProps } from '@zag-js/listbox';

export const ListboxItemContext = createContext<ItemProps>();
