import { use, type PropsWithChildren } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionRootContext } from '../modules/root-context';
import { AccordionItemContext } from '../modules/item-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface AccordionContentProps extends PropsWithChildren, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function AccordionContent(props: AccordionContentProps) {
	const accordion = use(AccordionRootContext);
	const itemProps = use(AccordionItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(accordion.getItemContentProps(itemProps), rest, {
		className: classesAccordion.content,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
