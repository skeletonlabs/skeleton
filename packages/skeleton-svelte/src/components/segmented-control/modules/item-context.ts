import { createContext } from '@/internal/create-context.js';
import type { ItemProps } from '@zag-js/radio-group';

export const ItemContext = createContext<() => ItemProps>();
