import { createContext } from '@/internal/create-context';
import type { Api } from '@zag-js/accordion';

export interface AccordionRootContextType {
	api: Api;
}

export const AccordionRootContext = createContext<AccordionRootContextType>();
