import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { ToastRootContext } from '../modules/toast-root-context';
import { classesToast } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ToastCloseTriggerProps extends PropsWithElement, ComponentProps<'button'> {}

export default function (props: ToastCloseTriggerProps) {
	const rootContext = useContext(ToastRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(rootContext.api.getCloseTriggerProps(), { className: classesToast.closeTrigger }, restAttributes);
	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
