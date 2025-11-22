import { createContext } from '../../../internal/create-context.js';
import type { ItemProps } from '@zag-js/file-upload';

export const ItemContext = createContext<() => ItemProps>();
