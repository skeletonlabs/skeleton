'use client';

import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { AccordionRootContext, AccordionItemContext } from '../modules/context.js';
import type { AccordionTriggerProps } from '../modules/types.js';

export default function (props: AccordionTriggerProps) {
	const rootContext = useContext(AccordionRootContext);
	const itemContext = useContext(AccordionItemContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getItemTriggerProps(itemContext.itemProps),
		{
			className:
				'skb:w-full skb:text-start skb:hover:preset-tonal-primary skb:py-2 skb:px-4 skb:rounded-base skb:flex skb:justify-between skb:items-center'
		},
		restAttributes
	);
	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
