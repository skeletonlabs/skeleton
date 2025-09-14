import type { ItemProps } from '@zag-js/accordion';

import { createContext } from '@/internal/create-context';

export const AccordionItemContext = createContext<() => ItemProps>();
