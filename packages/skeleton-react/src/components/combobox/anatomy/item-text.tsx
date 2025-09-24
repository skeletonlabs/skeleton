import { ComboboxItemContext } from '../modules/item-context';
import { ComboboxRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxItemTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function ItemText(props: ComboboxItemTextProps) {
	const combobox = use(ComboboxRootContext);
	const itemProps = use(ComboboxItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		combobox.getItemTextProps(itemProps),
		{
			className: classesCombobox.itemText,
		},
		rest,
	);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
