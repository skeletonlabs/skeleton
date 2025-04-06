'use client';

import { useContext } from 'react';
import * as accordion from '@zag-js/accordion';
import { mergeProps } from '@zag-js/react';
import { AccordionRootContext, AccordionItemContext } from '../modules/context.js';
import type { AccordionItemProps } from '../modules/types.js';

export default function (props: AccordionItemProps) {
	const rootContext = useContext(AccordionRootContext);
	const [itemProps, componentProps] = accordion.splitItemProps(props);
	const { children, ...restAttributes } = componentProps;
	const attributes = mergeProps(rootContext.api.getItemProps(itemProps), restAttributes);
	return (
		<AccordionItemContext.Provider value={{ itemProps }}>
			<div {...attributes}>{children}</div>
		</AccordionItemContext.Provider>
	);
}
