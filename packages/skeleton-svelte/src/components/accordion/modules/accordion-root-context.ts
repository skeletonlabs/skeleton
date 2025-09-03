import { createContext } from '@/internal/create-context.js';
import type { Api } from '@zag-js/accordion';

export interface AccordionRootContextType {
	api: Api;
}

export const AccordionRootContext = createContext<AccordionRootContextType>();
