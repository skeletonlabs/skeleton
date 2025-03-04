import { createContext } from 'react';
import type { AccordionContextState } from './types.js';
import type * as accordion from '@zag-js/accordion';

export const AccordionContext = createContext<AccordionContextState>({
	iconOpen: '-',
	iconClosed: '+',
	api: {} as ReturnType<typeof accordion.connect>,
});
export const AccordionItemContext = createContext<accordion.ItemProps>({
	value: '',
	disabled: false,
});
