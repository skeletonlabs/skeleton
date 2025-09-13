import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { ComboboxRootContext } from '../modules/root-context';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { splitItemProps, type ItemProps } from '@zag-js/combobox';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface ComboboxItemProps extends ItemProps, PropsWithElement<'li'>, HTMLAttributes<'li'> {}

export default function (props: ComboboxItemProps) {
	const combobox = useContext(ComboboxRootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(combobox.getItemProps(itemProps), rest, {
		className: classesCombobox.item
	});

	return element ? element(attributes) : <li {...attributes}>{children}</li>;
}
