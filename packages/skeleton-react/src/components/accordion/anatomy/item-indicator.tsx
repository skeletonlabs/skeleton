import { AccordionItemContext } from '../modules/item-context';
import { AccordionRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';
import type { PropsWithChildren } from 'react';

export interface AccordionItemIndicatorProps extends PropsWithChildren, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ItemIndicator(props: AccordionItemIndicatorProps) {
	const accordion = use(AccordionRootContext);
	const itemProps = use(AccordionItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(accordion.getItemIndicatorProps(itemProps), rest, {
		className: classesAccordion.indicator,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
