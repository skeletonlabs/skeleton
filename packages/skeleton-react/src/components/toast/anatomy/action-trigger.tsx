import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import * as classes from '@skeletonlabs/skeleton-common/classes';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ToastActionTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function ActionTrigger(props: ToastActionTriggerProps) {
	const toast = use(RootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		toast.getActionTriggerProps(),
		{
			className: classes.toast.actionTrigger,
		},
		rest,
	);

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
