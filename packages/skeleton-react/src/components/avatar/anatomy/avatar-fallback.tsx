'use client';

import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { AvatarRootContext } from '../modules/avatar-root-context';
import { classesAvatar } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface AvatarFallbackProps extends PropsWithElement, ComponentProps<'span'> {}

export default function (props: AvatarFallbackProps) {
	const rootContext = useContext(AvatarRootContext);
	const { element, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getFallbackProps(),
		{
			className: classesAvatar.fallback
		},
		restAttributes
	);
	return element ? element({ attributes }) : <span {...attributes}>{children}</span>;
}
