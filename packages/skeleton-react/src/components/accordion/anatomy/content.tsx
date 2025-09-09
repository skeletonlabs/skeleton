import { useContext, type ComponentProps, type PropsWithChildren } from 'react';
import { mergeProps } from '@zag-js/react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionRootContext } from '../modules/root-context';
import { AccordionItemContext } from '../modules/item-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface AccordionContentProps extends PropsWithChildren, PropsWithElement, ComponentProps<'div'> {}

export default function (props: AccordionContentProps) {
	const { element, children, ...restAttributes } = props;

	const rootContext = useContext(AccordionRootContext);
	const itemContext = useContext(AccordionItemContext);

	const attributes = mergeProps(
		rootContext.api.getItemContentProps(itemContext.itemProps),
		{ className: classesAccordion.content },
		restAttributes
	);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
