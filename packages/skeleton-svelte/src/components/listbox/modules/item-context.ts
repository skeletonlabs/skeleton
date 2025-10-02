import { createContext } from '@/internal/create-context';
import type { ItemProps } from '@zag-js/listbox';

export const ItemContext = createContext<() => ItemProps>();
