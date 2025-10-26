import type { useAccordion } from '../modules/provider.js';
import { RootContext as RootContext_ } from '../modules/root-context.js';
import { use } from 'react';
import type { ReactNode } from 'react';

export interface AccordionRootContextProps {
	children: (accordion: ReturnType<typeof useAccordion>) => ReactNode;
}

export default function RootContext(props: AccordionRootContextProps) {
	const accordion = use(RootContext_);

	const { children } = props;

	return children(accordion);
}
