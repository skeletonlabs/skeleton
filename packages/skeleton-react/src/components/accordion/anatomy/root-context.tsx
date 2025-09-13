import { useContext, type ReactNode } from 'react';
import { AccordionRootContext } from '../modules/root-context';
import type { useAccordion } from '../modules/use-accordion';

export interface AccordionRootContextProps {
	children: (accordion: ReturnType<typeof useAccordion>) => ReactNode;
}

export default function (props: AccordionRootContextProps) {
	const accordion = useContext(AccordionRootContext);

	const { children } = props;

	return children(accordion);
}
