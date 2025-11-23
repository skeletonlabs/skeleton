import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { ItemContext } from '../modules/item-context.js';
import { RootContext } from '../modules/root-context.js';
import { classesMenu } from '@skeletonlabs/skeleton-common';
import { splitOptionItemProps } from '@zag-js/menu';
import type { OptionItemProps } from '@zag-js/menu';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface MenuOptionItemProps extends OptionItemProps, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function OptionItem(props: MenuOptionItemProps) {
	const menu = use(RootContext);

	const [itemProps, componentProps] = splitOptionItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		menu.getOptionItemProps(itemProps),
		{
			className: classesMenu.item,
		},
		rest,
	);

	return (
		<ItemContext.Provider value={itemProps}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</ItemContext.Provider>
	);
}
