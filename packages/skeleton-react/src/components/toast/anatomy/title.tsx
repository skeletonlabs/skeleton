import { ToastRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesToast } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface ToastTitleProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function ToastTitle(props: ToastTitleProps) {
	const toast = use(ToastRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(toast.getTitleProps(), rest, {
		className: classesToast.title,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
