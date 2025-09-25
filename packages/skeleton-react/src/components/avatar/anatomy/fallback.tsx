import { AvatarRootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesAvatar } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface AvatarFallbackProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function Fallback(props: AvatarFallbackProps) {
	const avatar = use(AvatarRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(
		avatar.getFallbackProps(),
		{
			className: classesAvatar.fallback,
		},
		rest,
	);

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
