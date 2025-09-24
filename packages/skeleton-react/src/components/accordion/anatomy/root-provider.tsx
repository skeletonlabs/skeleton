import { AccordionRootContext } from '../modules/root-context';
import type { useAccordion } from '../modules/use-accordion';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface AccordionRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {
	value: ReturnType<typeof useAccordion>;
}

export default function RootProvider(props: AccordionRootProviderProps) {
	const { element, children, value: accordion, ...rest } = props;

	const attributes = mergeProps(
		accordion.getRootProps(),
		{
			className: classesAccordion.root,
		},
		rest,
	);

	return (
		<AccordionRootContext.Provider value={accordion}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</AccordionRootContext.Provider>
	);
}
