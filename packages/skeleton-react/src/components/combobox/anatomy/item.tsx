import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { type ItemProps, splitItemProps } from '@zag-js/combobox';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { ComboboxRootContext } from '../modules/root-context';

export interface ComboboxItemProps extends ItemProps, PropsWithElement<'li'>, HTMLAttributes<'li'> {}

export default function Item(props: ComboboxItemProps) {
	const combobox = use(ComboboxRootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(combobox.getItemProps(itemProps), rest, {
		className: classesCombobox.item,
	});

	return element ? element(attributes) : <li {...attributes}>{children}</li>;
}
