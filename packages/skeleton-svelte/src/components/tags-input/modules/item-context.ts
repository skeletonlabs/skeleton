import { createContext } from '@/internal/create-context.js';
import type { ItemProps } from '@zag-js/tags-input';

export const ItemContext = createContext<() => ItemProps>();
