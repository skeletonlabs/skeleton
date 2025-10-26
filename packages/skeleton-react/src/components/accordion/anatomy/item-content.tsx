import { ItemContext } from '../modules/item-context.js.js';
import { RootContext } from '../modules/root-context.js.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';
import type { PropsWithChildren } from 'react';

export interface AccordionItemContentProps extends PropsWithChildren, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ItemContent(props: AccordionItemContentProps) {
	const accordion = use(RootContext);
	const itemProps = use(ItemContext);

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
