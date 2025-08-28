import { useId } from 'react';
import * as accordion from '@zag-js/accordion';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import { AccordionRootContext } from '../modules/context.js';
import type { AccordionRootProps } from '../modules/types.js';
import { classesAccordion } from '@skeletonlabs/skeleton-common';

export default function (props: AccordionRootProps) {
	const [machineProps, componentProps] = accordion.splitProps(props);
	const { element, children, ...restAttributes } = componentProps;
	const service = useMachine(accordion.machine, {
		id: useId(),
		...machineProps
	});
	const api = accordion.connect(service, normalizeProps);
	const attributes = mergeProps(
		api.getRootProps(),
		{
			className: classesAccordion.root
		},
		restAttributes
	);
	return (
		<AccordionRootContext.Provider value={{ api }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</AccordionRootContext.Provider>
	);
}
