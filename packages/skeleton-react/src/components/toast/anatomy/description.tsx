import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { ToastRootContext } from '../modules/root-context';
import { classesToast } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface ToastDescriptionProps extends PropsWithElement, HTMLAttributes<'div'> {}

export default function (props: ToastDescriptionProps) {
	const rootContext = useContext(ToastRootContext);

	const { element, children, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getDescriptionProps(), { className: classesToast.description }, restAttributes);

	return element ? element({ attributes }) : <div {...attributes}>{children}</div>;
}
