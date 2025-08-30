import { createContext } from '../../internal/create-context.js';
import type { Api } from '@zag-js/accordion';

interface AccordionRootContextType {
	api: Api;
}

const AccordionRootContext = createContext<AccordionRootContextType>();

export { AccordionRootContext };
export type { AccordionRootContextType };
