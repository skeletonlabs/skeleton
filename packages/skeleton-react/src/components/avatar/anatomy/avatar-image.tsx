'use client';

import { useContext, type ComponentProps } from 'react';
import { mergeProps } from '@zag-js/react';
import { AvatarRootContext } from '../modules/avatar-root-context.js';
import { classesAvatar } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element.js';

export interface AvatarImageProps extends PropsWithElement, ComponentProps<'img'> {}

export default function (props: AvatarImageProps) {
	const rootContext = useContext(AvatarRootContext);
	const { element, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getImageProps(),
		{
			className: classesAvatar.image
		},
		restAttributes
	);
	return element ? element({ attributes }) : <img {...attributes} />;
}
