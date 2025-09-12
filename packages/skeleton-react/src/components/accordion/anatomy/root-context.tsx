import { useContext, type ReactNode } from 'react';
import type { Api } from '@zag-js/accordion';
import { AccordionRootContext } from '../modules/root-context';

export interface AccordionRootContextProps {
	children: (context: Api) => ReactNode;
}

export default function (props: AccordionRootContextProps) {
	const accordion = useContext(AccordionRootContext);

	const { children } = props;

	return children(accordion);
}
