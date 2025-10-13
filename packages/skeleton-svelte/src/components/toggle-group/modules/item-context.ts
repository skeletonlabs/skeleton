import { createContext } from '@/internal/create-context';
import type { ItemProps } from '@zag-js/toggle-group';

export const ItemContext = createContext<() => ItemProps>();
