import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/combobox-root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { splitItemProps, type ItemProps } from '@zag-js/combobox';
import type { PropsWithElement } from '@/internal/props-with-element';
import { ComboboxItemContext } from '../modules/combobox-item-context';

export interface ComboboxItemProps extends PropsWithElement, ItemProps, ComponentProps<'li'> {}

export default function (props: ComboboxItemProps) {
	const rootContext = useContext(ComboboxRootContext);
	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...restAttributes } = componentProps;
	const attributes = mergeProps(rootContext.api.getItemProps(itemProps), { className: classesCombobox.item }, restAttributes);
	return (
		<ComboboxItemContext.Provider value={{ itemState: rootContext.api.getItemState(itemProps) }}>
			{element ? element({ attributes }) : <li {...attributes}>{children}</li>}
		</ComboboxItemContext.Provider>
	);
}
