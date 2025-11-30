import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import { splitItemProps } from '@zag-js/accordion';
import type { ItemProps } from '@zag-js/accordion';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';
import type { PropsWithChildren } from 'react';

export interface AccordionItemProps extends ItemProps, PropsWithChildren, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Item(props: AccordionItemProps) {
	const accordion = use(RootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(accordion.getItemProps(itemProps), rest);

	return (
		<ItemContext.Provider value={itemProps}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</ItemContext.Provider>
	);
}
