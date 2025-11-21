import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { classesMenu } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface MenuItemTextProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function ItemText(props: MenuItemTextProps) {
	const menu = use(RootContext);
	const itemProps = use(ItemContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		menu.getItemTextProps(itemProps),
		{
			className: classesMenu.itemText,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
