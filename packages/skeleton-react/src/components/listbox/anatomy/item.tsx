import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import { classesListbox } from '@skeletonlabs/skeleton-common';
import { type ItemProps, splitItemProps } from '@zag-js/listbox';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ListboxItemProps extends ItemProps, PropsWithElement<'li'>, HTMLAttributes<'li'> {}

export default function Item(props: ListboxItemProps) {
	const listbox = use(RootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		listbox.getItemProps(itemProps),
		{
			className: classesListbox.item,
		},
		rest,
	);

	return (
		<ItemContext.Provider value={itemProps}>{element ? element(attributes) : <li {...attributes}>{children}</li>}</ItemContext.Provider>
	);
}
