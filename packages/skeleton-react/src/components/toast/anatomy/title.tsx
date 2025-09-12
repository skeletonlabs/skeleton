import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { ToastRootContext } from '../modules/root-context';
import { classesToast } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ToastTitleProps extends PropsWithElement, HTMLAttributes<'div'> {}

export default function (props: ToastTitleProps) {
	const rootContext = useContext(ToastRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(rootContext.api.getTitleProps(), { className: classesToast.title }, rest);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
