import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { classesMenu } from '@skeletonlabs/skeleton-common';
import type { Api, PropTypes } from '@zag-js/menu';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface MenuTriggerItemProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	/**
	 * The child menu API for the nested menu
	 */
	childMenu: Api<PropTypes>;
}

export default function TriggerItem(props: MenuTriggerItemProps) {
	const menu = use(RootContext);

	const { element, children, childMenu, ...rest } = props;

	const attributes = mergeProps(
		menu.getTriggerItemProps(childMenu),
		{
			className: classesMenu.triggerItem,
		},
		rest,
	);

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
