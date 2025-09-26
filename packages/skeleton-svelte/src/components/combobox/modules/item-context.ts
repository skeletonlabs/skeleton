import { createContext } from '@/internal/create-context';
import type { ItemProps } from '@zag-js/combobox';

export const ItemContext = createContext<() => ItemProps>();
