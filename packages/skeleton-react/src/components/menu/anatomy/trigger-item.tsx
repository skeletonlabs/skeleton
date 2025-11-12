import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesMenu } from '@skeletonlabs/skeleton-common';
import { splitTriggerItemProps } from '@zag-js/menu';
import type { TriggerItemProps as ZagTriggerItemProps } from '@zag-js/menu';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface MenuTriggerItemProps
	extends ZagTriggerItemProps,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir'> {}

export default function TriggerItem(props: MenuTriggerItemProps) {
	const menu = use(RootContext);

	const [itemProps, componentProps] = splitTriggerItemProps(props);
	const { element, children, ...rest } = componentProps;

	const attributes = mergeProps(
		menu.getTriggerItemProps(itemProps),
		{
			className: classesMenu.triggerItem,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
