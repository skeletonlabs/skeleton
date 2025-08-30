import { useContext } from 'react';
import { AccordionRootContext } from '../modules/context.js';
import type { AccordionRootContextProps } from '../modules/types.js';

export default function (props: AccordionRootContextProps) {
	const rootContext = useContext(AccordionRootContext);
	return props.children(rootContext.api);
}
