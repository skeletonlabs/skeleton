import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { AvatarRootContext } from '../modules/root-context';
import { classesAvatar } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface AvatarFallbackProps extends PropsWithElement, HTMLAttributes<'span'> {}

export default function (props: AvatarFallbackProps) {
	const rootContext = useContext(AvatarRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(rootContext.api.getFallbackProps(), { className: classesAvatar.fallback }, rest);

	return element ? element({ attributes }) : <span {...attributes}>{children}</span>;
}
