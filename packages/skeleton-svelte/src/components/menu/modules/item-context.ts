import { createContext } from '../../../internal/create-context.js';
import type { ItemProps } from '@zag-js/menu';

export const MenuItemContext = createContext<() => ItemProps>();
