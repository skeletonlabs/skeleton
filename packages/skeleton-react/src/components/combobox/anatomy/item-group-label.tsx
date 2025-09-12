import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/root-context';
import { ComboboxItemGroupContext } from '../modules/item-group-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { splitItemGroupLabelProps, type ItemGroupLabelProps } from '@zag-js/combobox';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ComboboxItemGroupLabelProps extends PropsWithElement, Omit<ItemGroupLabelProps, 'htmlFor'>, HTMLAttributes<'div'> {}

export default function (props: ComboboxItemGroupLabelProps) {
	const rootContext = useContext(ComboboxRootContext);
	const itemGroupContext = useContext(ComboboxItemGroupContext);

	const [itemGroupLabelProps, componentProps] = splitItemGroupLabelProps({
		htmlFor: itemGroupContext.itemGroupProps.id,
		...props
	});
	const { element, children, ...restAttributes } = componentProps;

	const attributes = mergeProps(
		rootContext.api.getItemGroupLabelProps(itemGroupLabelProps),
		{ className: classesCombobox.itemGroupLabel },
		restAttributes
	);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
