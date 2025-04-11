'use client';

import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { AvatarRootContext } from '../modules/context.js';
import type { AvatarImageProps } from '../modules/types.js';

export default function (props: AvatarImageProps) {
	const rootContext = useContext(AvatarRootContext);
	const { element, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getImageProps(),
		{
			className: 'skb:w-full skb:object-cover'
		},
		restAttributes
	);
	return element ? element({ attributes }) : <img {...attributes} />;
}
