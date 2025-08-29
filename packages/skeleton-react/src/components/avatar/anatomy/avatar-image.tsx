'use client';

import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { AvatarRootContext } from '../modules/context.js';
import type { AvatarImageProps } from '../modules/types.js';
import { classesAvatar } from '@skeletonlabs/skeleton-common';

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
