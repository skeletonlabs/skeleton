import { classesCombobox } from '@skeletonlabs/skeleton-common';
import { type ItemGroupProps, splitItemGroupProps } from '@zag-js/combobox';
import { mergeProps } from '@zag-js/react';
import { use, useId } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { ComboboxItemGroupContext } from '../modules/item-group-context';
import { ComboboxRootContext } from '../modules/root-context';

export interface ComboboxItemGroupProps extends Omit<ItemGroupProps, 'id'>, PropsWithElement<'div'>, Omit<HTMLAttributes<'div'>, 'id'> {}

export default function ItemGroup(props: ComboboxItemGroupProps) {
	const combobox = use(ComboboxRootContext);

	const [itemGroupProps, componentProps] = splitItemGroupProps({
		id: useId(),
		...props,
	});
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(combobox.getItemGroupProps(itemGroupProps), rest, {
		className: classesCombobox.itemGroup,
	});

	return (
		<ComboboxItemGroupContext.Provider value={itemGroupProps}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</ComboboxItemGroupContext.Provider>
	);
}
