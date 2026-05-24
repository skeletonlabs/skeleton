import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { MenuItemContext } from '../modules/item-context.js';
import { MenuRootContext } from '../modules/root-context.js';
import { splitItemProps } from '@zag-js/menu';
import type { ItemProps } from '@zag-js/menu';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface MenuItemProps extends ItemProps, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function Item(props: MenuItemProps) {
	const menu = use(MenuRootContext);

	const [itemProps, componentProps] = splitItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(menu.getItemProps(itemProps), rest);

	return (
		<MenuItemContext.Provider value={itemProps}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</MenuItemContext.Provider>
	);
}
