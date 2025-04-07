'use client';

import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { AccordionRootContext, AccordionItemContext } from '../modules/context.js';
import type { AccordionTriggerProps } from '../modules/types.js';

export default function (props: AccordionTriggerProps) {
	const rootContext = useContext(AccordionRootContext);
	const itemContext = useContext(AccordionItemContext);
	const { child, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getItemTriggerProps(itemContext.itemProps),
		{
			className:
				'base:w-full base:text-start base:hover:preset-tonal-primary base:py-2 base:px-4 base:rounded-base base:flex base:justify-between base:items-center'
		},
		restAttributes
	);
	return child ? child({ attributes }) : <button {...attributes}>{children}</button>;
}
