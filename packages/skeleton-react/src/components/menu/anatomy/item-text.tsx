import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { MenuItemContext } from '../modules/item-context.js';
import { MenuRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface MenuItemTextProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function ItemText(props: MenuItemTextProps) {
	const menu = use(MenuRootContext);
	const itemProps = use(MenuItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(menu.getItemTextProps(itemProps), rest);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
