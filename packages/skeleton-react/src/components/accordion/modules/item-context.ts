import { createContext } from '@/internal/create-context.js';
import type { ItemProps } from '@zag-js/accordion';

export const ItemContext = createContext<ItemProps>();
