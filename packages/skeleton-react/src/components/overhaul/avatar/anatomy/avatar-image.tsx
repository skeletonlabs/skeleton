'use client';

import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { AvatarRootContext } from '../modules/context.js';
import type { AvatarImageProps } from '../modules/types.js';

export default function (props: AvatarImageProps) {
	const rootContext = useContext(AvatarRootContext);
	const attributes = mergeProps(
		rootContext.api.getImageProps(),
		{
			className: 'base:w-full base:object-cover'
		},
		props
	);
	return <img {...attributes} />;
}
