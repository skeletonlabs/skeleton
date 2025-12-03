import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ItemGroupContext } from '../modules/item-group-context.js';
import { RootContext } from '../modules/root-context.js';
import { type ItemGroupLabelProps, splitItemGroupLabelProps } from '@zag-js/combobox';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxItemGroupLabelProps extends Omit<ItemGroupLabelProps, 'htmlFor'>, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ItemGroupLabel(props: ComboboxItemGroupLabelProps) {
	const combobox = use(RootContext);
	const itemGroupProps = use(ItemGroupContext);

	const [itemGroupLabelProps, componentProps] = splitItemGroupLabelProps({
		htmlFor: itemGroupProps.id,
		...props,
	});
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(combobox.getItemGroupLabelProps(itemGroupLabelProps), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
