import { createContext } from '$lib/internal/create-context.js';
import type { AccordionContext } from './types.js';

export const [setAccordionContext, getAccordionContext, key] = createContext<AccordionContext>({
	open: () => {},
	close: () => {},
	toggle: () => {},
	isOpen: () => false,
	animDuration: 0
});
