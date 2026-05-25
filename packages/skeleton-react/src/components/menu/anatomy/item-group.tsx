import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { MenuItemGroupContext } from '../modules/item-group-context.js';
import { MenuRootContext } from '../modules/root-context.js';
import { splitItemGroupProps } from '@zag-js/menu';
import type { ItemGroupProps } from '@zag-js/menu';
import { mergeProps } from '@zag-js/react';
import { use, useId } from 'react';

export interface MenuItemGroupProps extends Omit<ItemGroupProps, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function ItemGroup(props: MenuItemGroupProps) {
	const menu = use(MenuRootContext);

	const [itemGroupProps, componentProps] = splitItemGroupProps({
		id: useId(),
		...props,
	});
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(menu.getItemGroupProps(itemGroupProps), rest);

	return (
		<MenuItemGroupContext.Provider value={itemGroupProps}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</MenuItemGroupContext.Provider>
	);
}
