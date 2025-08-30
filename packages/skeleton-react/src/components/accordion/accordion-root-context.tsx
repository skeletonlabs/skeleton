import { useContext, type ReactNode } from 'react';
import { AccordionRootContext } from './accordion-root.context';
import type { Api } from '@zag-js/accordion';

export interface AccordionRootContextProps {
	children: (api: Api) => ReactNode;
}

export default function (props: AccordionRootContextProps) {
	const rootContext = useContext(AccordionRootContext);
	return props.children(rootContext.api);
}
