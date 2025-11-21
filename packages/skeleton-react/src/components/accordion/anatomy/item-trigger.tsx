import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesAccordion } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';
import type { PropsWithChildren } from 'react';

export interface AccordionItemTriggerProps extends PropsWithChildren, PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function ItemTrigger(props: AccordionItemTriggerProps) {
	const accordion = use(RootContext);
	const itemProps = use(ItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		accordion.getItemTriggerProps(itemProps),
		{
			className: classesAccordion.itemTrigger,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
