import { createContext } from 'react';
import { AccordionContextState } from './types';
import type * as accordion from '@zag-js/accordion';

export const AccordionContext = createContext<AccordionContextState>({
	iconOpen: '-',
	iconClosed: '+',
	api: {} as ReturnType<typeof accordion.connect>
});
export const AccordionItemContext = createContext<accordion.ItemProps>({
	value: '',
	disabled: false
});
