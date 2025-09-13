import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/root-context';
import { ComboboxItemGroupContext } from '../modules/item-group-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { splitItemGroupLabelProps, type ItemGroupLabelProps } from '@zag-js/combobox';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface ComboboxItemGroupLabelProps extends Omit<ItemGroupLabelProps, 'htmlFor'>, PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function (props: ComboboxItemGroupLabelProps) {
	const combobox = useContext(ComboboxRootContext);
	const itemGroupProps = useContext(ComboboxItemGroupContext);

	const [itemGroupLabelProps, componentProps] = splitItemGroupLabelProps({
		htmlFor: itemGroupProps.id,
		...props
	});
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(combobox.getItemGroupLabelProps(itemGroupLabelProps), rest, {
		className: classesCombobox.itemGroupLabel
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
