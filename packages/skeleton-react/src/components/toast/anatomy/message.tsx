import { mergeProps } from '@zag-js/react';
import { classesToast } from '@skeletonlabs/skeleton-common';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ToastMessageProps extends PropsWithElement, HTMLAttributes<'div'> {}

export default function (props: ToastMessageProps) {
	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps({ className: classesToast.message }, restAttributes);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
