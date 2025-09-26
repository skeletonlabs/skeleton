import { createContext } from '@/internal/create-context';
import type { ItemProps } from '@zag-js/file-upload';

export const ItemContext = createContext<() => ItemProps>();
