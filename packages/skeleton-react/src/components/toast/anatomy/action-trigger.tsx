import { use } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { ToastRootContext } from '../modules/root-context.js';
import { classesToast } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ToastActionTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> { }

export default function (props: ToastActionTriggerProps) {
	const toast = use(ToastRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(toast.getActionTriggerProps(), rest, {
		className: classesToast.actionTrigger
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
