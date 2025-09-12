import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { ToastRootContext } from '../modules/root-context.js';
import { classesToast } from '@skeletonlabs/skeleton-common';
import X from '@/internal/components/x';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ToastCloseTriggerProps extends PropsWithElement, HTMLAttributes<'button'> {}

export default function (props: ToastCloseTriggerProps) {
	const rootContext = useContext(ToastRootContext);

	const { element, children = <X />, ...rest } = props;

	const attributes = mergeProps(rootContext.api.getCloseTriggerProps(), { className: classesToast.closeTrigger }, rest);

	return element ? element({ attributes }) : <button {...attributes}>{children}</button>;
}
