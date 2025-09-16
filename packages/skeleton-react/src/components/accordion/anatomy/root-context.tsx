import { AccordionRootContext } from '../modules/root-context';
import type { useAccordion } from '../modules/use-accordion';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface AccordionRootContextProps {
	children: (accordion: ReturnType<typeof useAccordion>) => ReactNode;
}

export default function RootContext(props: AccordionRootContextProps) {
	const accordion = use(AccordionRootContext);

	const { children } = props;

	return children(accordion);
}
