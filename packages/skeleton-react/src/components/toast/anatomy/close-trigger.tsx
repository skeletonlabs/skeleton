import { ToastRootContext } from '../modules/root-context.js';
import X from '@/internal/components/x';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesToast } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ToastCloseTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function ToastCloseTrigger(props: ToastCloseTriggerProps) {
	const toast = use(ToastRootContext);

	const { element, children = <X />, ...rest } = props;

	const attributes = mergeProps(toast.getCloseTriggerProps(), rest, {
		className: classesToast.closeTrigger,
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
