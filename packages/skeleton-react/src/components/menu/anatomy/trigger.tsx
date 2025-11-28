import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface MenuTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button', 'id' | 'dir'> {}

export default function Trigger(props: MenuTriggerProps) {
	const menu = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		menu.getTriggerProps(),
		{
			className: classes.menu.trigger,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
