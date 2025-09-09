import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { ToastRootContext } from '../modules/root-context';
import { classesToast } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ToastTitleProps extends PropsWithElement, ComponentProps<'div'> {}

export default function (props: ToastTitleProps) {
	const rootContext = useContext(ToastRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getTitleProps(), { className: classesToast.title }, restAttributes);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
