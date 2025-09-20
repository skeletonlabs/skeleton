import { ComboboxItemGroupContext } from '../modules/item-group-context';
import { ComboboxRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { type ItemGroupLabelProps, splitItemGroupLabelProps } from '@zag-js/combobox';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxItemGroupLabelProps extends Omit<ItemGroupLabelProps, 'htmlFor'>, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ItemGroupLabel(props: ComboboxItemGroupLabelProps) {
	const combobox = use(ComboboxRootContext);
	const itemGroupProps = use(ComboboxItemGroupContext);

	const [itemGroupLabelProps, componentProps] = splitItemGroupLabelProps({
		htmlFor: itemGroupProps.id,
		...props,
	});
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(combobox.getItemGroupLabelProps(itemGroupLabelProps), rest, {
		className: classesCombobox.itemGroupLabel,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
