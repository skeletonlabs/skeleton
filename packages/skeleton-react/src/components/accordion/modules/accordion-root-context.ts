import { createContext } from 'react';
import type { Api } from '@zag-js/accordion';

interface AccordionRootContextType {
	api: Api;
}

export const AccordionRootContext = createContext<AccordionRootContextType>(null!);
