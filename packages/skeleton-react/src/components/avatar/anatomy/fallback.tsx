import { classesAvatar } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { AvatarRootContext } from '../modules/root-context';

export interface AvatarFallbackProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}

export default function AvatarFallback(props: AvatarFallbackProps) {
	const avatar = use(AvatarRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(avatar.getFallbackProps(), rest, {
		className: classesAvatar.fallback,
	});

	return element ? element(attributes) : <span {...attributes}>{children}</span>;
}
