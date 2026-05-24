import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ListboxItemContext } from '../modules/item-context.js';
import { ListboxRootContext } from '../modules/root-context.js';
import { type ItemProps, splitItemProps } from '@zag-js/listbox';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ListboxItemProps extends ItemProps, PropsWithElement<'li'>, HTMLAttributes<'li'> {}

export default function Item(props: ListboxItemProps) {
	const listbox = use(ListboxRootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(listbox.getItemProps(itemProps), rest);

	return (
		<ListboxItemContext.Provider value={itemProps}>
			{element ? element(attributes) : <li {...attributes}>{children}</li>}
		</ListboxItemContext.Provider>
	);
}
