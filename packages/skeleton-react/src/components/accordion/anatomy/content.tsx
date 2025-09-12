import { useContext, type PropsWithChildren } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { AccordionRootContext } from '../modules/root-context';
import { AccordionItemContext } from '../modules/item-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface AccordionContentProps extends PropsWithChildren, PropsWithElement, HTMLAttributes<'div'> {}

export default function (props: AccordionContentProps) {
	const rootContext = useContext(AccordionRootContext);
	const itemContext = useContext(AccordionItemContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(
		rootContext.api.getItemContentProps(itemContext.itemProps),
		{ className: classesAccordion.content },
		restAttributes
	);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
