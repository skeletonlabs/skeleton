import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesMenu } from '@skeletonlabs/skeleton-common';
import { splitItemGroupLabelProps } from '@zag-js/menu';
import type { ItemGroupLabelProps as ZagItemGroupLabelProps } from '@zag-js/menu';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface MenuItemGroupLabelProps
	extends ZagItemGroupLabelProps,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir'> {}

export default function ItemGroupLabel(props: MenuItemGroupLabelProps) {
	const menu = use(RootContext);

	const [labelProps, componentProps] = splitItemGroupLabelProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		menu.getItemGroupLabelProps(labelProps),
		{
			className: classesMenu.itemGroupLabel,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
