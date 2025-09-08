import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { ToastRootContext } from '../modules/toast-root-context';
import { classesToast } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ToastDescriptionProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: ToastDescriptionProps) {
	const rootContext = useContext(ToastRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(rootContext.api.getDescriptionProps(), { className: classesToast.description }, restAttributes);
	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
