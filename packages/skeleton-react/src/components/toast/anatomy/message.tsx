import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesToast } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface ToastMessageProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}

export default function Message(props: ToastMessageProps) {
	const { element, children, ...rest } = props;

	const attributes = mergeProps(rest, {
		className: classesToast.message,
	});

	return element ? element(attributes) : <div {...attributes}>{children}</div>;
}
