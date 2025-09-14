import { mergeProps } from '@zag-js/react';
import { use, type PropsWithChildren } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionItemContext } from '../modules/item-context';
import { AccordionRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface AccordionIndicatorProps extends PropsWithChildren, PropsWithElement<'div'>, HTMLAttributes<'div'> { }

export default function (props: AccordionIndicatorProps) {
	const accordion = use(AccordionRootContext);
	const itemProps = use(AccordionItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(accordion.getItemIndicatorProps(itemProps), rest, {
		className: classesAccordion.indicator
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
