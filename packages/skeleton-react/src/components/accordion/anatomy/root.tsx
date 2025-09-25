import { AccordionRootContext } from '../modules/root-context';
import { useAccordion } from '../modules/use-accordion';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { splitProps } from '@zag-js/accordion';
import type { Props } from '@zag-js/accordion';
import { mergeProps } from '@zag-js/react';

export interface AccordionRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function Root(props: AccordionRootProps) {
	const [accordionProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const accordion = useAccordion(accordionProps);

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
