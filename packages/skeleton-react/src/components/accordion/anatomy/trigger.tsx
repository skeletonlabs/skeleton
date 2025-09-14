import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { type PropsWithChildren, use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { AccordionItemContext } from '../modules/item-context';
import { AccordionRootContext } from '../modules/root-context';

export interface AccordionTriggerProps extends PropsWithChildren, PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function AccordionTrigger(props: AccordionTriggerProps) {
	const accordion = use(AccordionRootContext);
	const itemProps = use(AccordionItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(accordion.getItemTriggerProps(itemProps), rest, {
		className: classesAccordion.trigger,
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
