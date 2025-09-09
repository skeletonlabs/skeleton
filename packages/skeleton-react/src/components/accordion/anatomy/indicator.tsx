import { mergeProps } from '@zag-js/react';
import { useContext, type ComponentProps, type PropsWithChildren } from 'react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionItemContext } from '../modules/item-context';
import { AccordionRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface AccordionIndicatorProps extends PropsWithChildren, PropsWithElement, ComponentProps<'div'> {}

export default function (props: AccordionIndicatorProps) {
	const { element, children, ...restAttributes } = props;

	const rootContext = useContext(AccordionRootContext);
	const itemContext = useContext(AccordionItemContext);

	const attributes = mergeProps(
		rootContext.api.getItemIndicatorProps(itemContext.itemProps),
		{ className: classesAccordion.indicator },
		restAttributes
	);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
