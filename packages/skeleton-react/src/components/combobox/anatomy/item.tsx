import { ItemContext } from '../modules/item-context';
import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { type ItemProps, splitItemProps } from '@zag-js/combobox';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxItemProps extends ItemProps, PropsWithElement<'li'>, HTMLAttributes<'li'> {}

export default function Item(props: ComboboxItemProps) {
	const combobox = use(RootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		combobox.getItemProps(itemProps),
		{
			className: classesCombobox.item,
		},
		rest,
	);

	return (
		<ItemContext.Provider value={itemProps}>{element ? element(attributes) : <li {...attributes}>{children}</li>}</ItemContext.Provider>
	);
}
