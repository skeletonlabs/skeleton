import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ComboboxItemTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function ItemText(props: ComboboxItemTextProps) {
	const combobox = use(RootContext);
	const itemProps = use(ItemContext);

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
