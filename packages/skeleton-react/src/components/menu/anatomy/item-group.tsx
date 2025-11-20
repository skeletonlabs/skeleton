import { ItemGroupContext } from '../modules/item-group-context.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesMenu } from '@skeletonlabs/skeleton-common';
import { splitItemGroupProps } from '@zag-js/menu';
import type { ItemGroupProps } from '@zag-js/menu';
import { mergeProps } from '@zag-js/react';
import { use, useId } from 'react';

export interface MenuItemGroupProps extends Omit<ItemGroupProps, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function ItemGroup(props: MenuItemGroupProps) {
	const menu = use(RootContext);

	const [itemGroupProps, componentProps] = splitItemGroupProps({
		id: useId(),
		...props,
	});
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		menu.getItemGroupProps(itemGroupProps),
		{
			className: classesMenu.itemGroup,
		},
		rest,
	);

	return (
		<ItemGroupContext.Provider value={itemGroupProps}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</ItemGroupContext.Provider>
	);
}
