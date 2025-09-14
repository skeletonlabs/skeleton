import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { type Props, splitProps } from '@zag-js/accordion';
import { mergeProps } from '@zag-js/react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { AccordionRootContext } from '../modules/root-context';
import { useAccordion } from '../modules/use-accordion';

export interface AccordionRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function AccordionRoot(props: AccordionRootProps) {
	const [accordionProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const accordion = useAccordion(accordionProps);

	const attributes = mergeProps(accordion.getRootProps(), rest, {
		className: classesAccordion.root,
	});

	return (
		<AccordionRootContext.Provider value={accordion}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</AccordionRootContext.Provider>
	);
}
