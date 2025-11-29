import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ItemGroupContext } from '../modules/item-group-context.js';
import { RootContext } from '../modules/root-context.js';
import { type ItemGroupProps, splitItemGroupProps } from '@zag-js/combobox';
import { mergeProps } from '@zag-js/react';
import { use, useId } from 'react';

export interface ComboboxItemGroupProps extends Omit<ItemGroupProps, 'id'>, PropsWithElement<'div'>, Omit<HTMLAttributes<'div'>, 'id'> {}

export default function ItemGroup(props: ComboboxItemGroupProps) {
	const combobox = use(RootContext);

	const [itemGroupProps, componentProps] = splitItemGroupProps({
		id: useId(),
		...props,
	});
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(combobox.getItemGroupProps(itemGroupProps), rest);

	return (
		<ItemGroupContext.Provider value={itemGroupProps}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</ItemGroupContext.Provider>
	);
}
