import { ItemGroupContext } from '../modules/item-group-context.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesListbox } from '@skeletonlabs/skeleton-common';
import { type ItemGroupLabelProps, splitItemGroupLabelProps } from '@zag-js/listbox';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ListboxItemGroupLabelProps extends Omit<ItemGroupLabelProps, 'htmlFor'>, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ItemGroupLabel(props: ListboxItemGroupLabelProps) {
	const listbox = use(RootContext);
	const itemGroupProps = use(ItemGroupContext);

	const [itemGroupLabelProps, componentProps] = splitItemGroupLabelProps({
		htmlFor: itemGroupProps.id,
		...props,
	});
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		listbox.getItemGroupLabelProps(itemGroupLabelProps),
		{
			className: classesListbox.itemGroupLabel,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
