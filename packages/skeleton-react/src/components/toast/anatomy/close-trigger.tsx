import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { ToastRootContext } from '../modules/root-context.js';
import { classesToast } from '@skeletonlabs/skeleton-common';
import X from '@/internal/components/x';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ToastCloseTriggerProps extends PropsWithElement, ComponentProps<'button'> {}

export default function (props: ToastCloseTriggerProps) {
	const rootContext = useContext(ToastRootContext);

	const { element, children = <X />, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getCloseTriggerProps(), { className: classesToast.closeTrigger }, restAttributes);

	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
