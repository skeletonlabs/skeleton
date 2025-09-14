import { use } from 'react';
import { mergeProps } from '@zag-js/react';
import { ToastRootContext } from '../modules/root-context';
import { classesToast } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';

export interface ToastTitleProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ToastTitle(props: ToastTitleProps) {
	const toast = use(ToastRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(toast.getTitleProps(), rest, {
		className: classesToast.title,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
