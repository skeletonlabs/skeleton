import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ItemGroupContext } from '../modules/item-group-context.js';
import { RootContext } from '../modules/root-context.js';
import { type ItemGroupProps, splitItemGroupProps } from '@zag-js/listbox';
import { mergeProps } from '@zag-js/react';
import { use, useId } from 'react';

export interface ListboxItemGroupProps extends Omit<ItemGroupProps, 'id'>, PropsWithElement<'div'>, Omit<HTMLAttributes<'div'>, 'id'> {}

export default function ItemGroup(props: ListboxItemGroupProps) {
	const listbox = use(RootContext);

	const [itemGroupProps, componentProps] = splitItemGroupProps({
		id: useId(),
		...props,
	});
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(listbox.getItemGroupProps(itemGroupProps), rest);

	return (
		<ItemGroupContext.Provider value={itemGroupProps}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</ItemGroupContext.Provider>
	);
}
