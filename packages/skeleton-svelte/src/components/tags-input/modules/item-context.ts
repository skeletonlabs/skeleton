import type { ItemProps } from '@zag-js/tags-input';

import { createContext } from '@/internal/create-context';

export const TagsInputItemContext = createContext<() => ItemProps>();
