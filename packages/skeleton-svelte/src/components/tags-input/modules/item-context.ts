import { createContext } from '@/internal/create-context';
import type { ItemProps } from '@zag-js/tags-input';

export const TagsInputItemContext = createContext<() => ItemProps>();
