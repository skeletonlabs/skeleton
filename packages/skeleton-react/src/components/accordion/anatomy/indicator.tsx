import { mergeProps } from '@zag-js/react';
import { useContext, type PropsWithChildren } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionItemContext } from '../modules/item-context';
import { AccordionRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface AccordionIndicatorProps extends PropsWithChildren, PropsWithElement, HTMLAttributes<'div'> {}

export default function (props: AccordionIndicatorProps) {
	const rootContext = useContext(AccordionRootContext);
	const itemContext = useContext(AccordionItemContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(
		rootContext.api.getItemIndicatorProps(itemContext.itemProps),
		{ className: classesAccordion.indicator },
		restAttributes
	);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
