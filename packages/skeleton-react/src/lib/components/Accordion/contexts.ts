// Accordion Contexts

import { createContext } from 'react';
import { AccordionContextState } from './types';
import * as accordion from '@zag-js/accordion';

export const AccordionContext = createContext<AccordionContextState>({
	animDuration: 0.2,
	iconOpen: '-',
	iconClosed: '+',
	api: {} as ReturnType<typeof accordion.connect>
});
export const AccordionItemContext = createContext<accordion.ItemProps>({
	value: '',
	disabled: false
});
