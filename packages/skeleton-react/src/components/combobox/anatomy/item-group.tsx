import { useContext, useId, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { splitItemGroupProps, type ItemGroupProps } from '@zag-js/combobox';
import { ComboboxItemGroupContext } from '../modules/item-group-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ComboboxItemGroupProps extends PropsWithElement, Omit<ItemGroupProps, 'id'>, Omit<ComponentProps<'div'>, 'id'> {}

export default function (props: ComboboxItemGroupProps) {
	const rootContext = useContext(ComboboxRootContext);
	const [itemGroupProps, componentProps] = splitItemGroupProps({
		id: useId(),
		...props
	});
	const { element, children, ...restAttributes } = componentProps;
	const attributes = mergeProps(
		rootContext.api.getItemGroupProps(itemGroupProps),
		{ className: classesCombobox.itemGroup },
		restAttributes
	);
	return (
		<ComboboxItemGroupContext.Provider value={{ itemGroupProps }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</ComboboxItemGroupContext.Provider>
	);
}
