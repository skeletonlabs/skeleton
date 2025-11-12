import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesMenu } from '@skeletonlabs/skeleton-common';
import { splitItemGroupProps } from '@zag-js/menu';
import type { ItemGroupProps as ZagItemGroupProps } from '@zag-js/menu';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface MenuItemGroupProps extends ZagItemGroupProps, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function ItemGroup(props: MenuItemGroupProps) {
	const menu = use(RootContext);

	const [groupProps, componentProps] = splitItemGroupProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		menu.getItemGroupProps(groupProps),
		{
			className: classesMenu.itemGroup,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
