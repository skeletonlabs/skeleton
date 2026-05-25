import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { MenuItemGroupContext } from '../modules/item-group-context.js';
import { MenuRootContext } from '../modules/root-context.js';
import { splitItemGroupLabelProps } from '@zag-js/menu';
import type { ItemGroupLabelProps } from '@zag-js/menu';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface MenuItemGroupLabelProps
	extends Omit<ItemGroupLabelProps, 'htmlFor'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function ItemGroupLabel(props: MenuItemGroupLabelProps) {
	const menu = use(MenuRootContext);
	const itemGroupProps = use(MenuItemGroupContext);

	const [labelProps, componentProps] = splitItemGroupLabelProps({
		htmlFor: itemGroupProps.id,
		...props,
	});
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(menu.getItemGroupLabelProps(labelProps), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
