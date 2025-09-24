import { AccordionItemContext } from '../modules/item-context.js';
import { AccordionRootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';
import type { PropsWithChildren } from 'react';

export interface AccordionItemContentProps extends PropsWithChildren, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ItemContent(props: AccordionItemContentProps) {
	const accordion = use(AccordionRootContext);
	const itemProps = use(AccordionItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		accordion.getItemContentProps(itemProps),
		{
			className: classesAccordion.content,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
