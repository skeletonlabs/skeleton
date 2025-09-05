import { useContext, type ReactNode } from 'react';
import { AccordionRootContext, type AccordionRootContextType } from '../modules/accordion-root-context';

export interface AccordionRootContextProps {
	children: (context: AccordionRootContextType) => ReactNode;
}

export default function (props: AccordionRootContextProps) {
	const rootContext = useContext(AccordionRootContext);
	return props.children(rootContext);
}
