import { useId, type ComponentProps, type PropsWithChildren } from 'react';
import { splitProps, machine, connect, type Props } from '@zag-js/accordion';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionRootContext } from '../modules/accordion-root-context.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';

export interface AccordionRootProps
	extends PropsWithChildren,
		PropsWithElement,
		Omit<Props, 'id'>,
		Omit<ComponentProps<'div'>, 'id' | 'defaultValue' | 'dir'> {}

export default function (props: AccordionRootProps) {
	const [machineProps, componentProps] = splitProps(props);
	const { element, children, ...restAttributes } = componentProps;
	const service = useMachine(machine, {
		id: useId(),
		...machineProps
	});
	const api = connect(service, normalizeProps);
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
