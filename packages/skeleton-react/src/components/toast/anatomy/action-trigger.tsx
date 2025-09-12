import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { ToastRootContext } from '../modules/root-context.js';
import { classesToast } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ToastActionTriggerProps extends PropsWithElement, HTMLAttributes<'button'> {}

export default function (props: ToastActionTriggerProps) {
	const rootContext = useContext(ToastRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getActionTriggerProps(), { className: classesToast.actionTrigger }, restAttributes);

	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
