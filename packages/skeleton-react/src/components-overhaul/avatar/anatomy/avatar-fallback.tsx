'use client';

import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { AvatarRootContext } from '../modules/context.js';
import type { AvatarFallbackProps } from '../modules/types.js';

export default function (props: AvatarFallbackProps) {
	const rootContext = useContext(AvatarRootContext);
	const { child, children, ...restAttributes } = props;
	const attributes = mergeProps(
		rootContext.api.getFallbackProps(),
		{
			className: 'base:size-full base:flex base:justify-center base:items-center'
		},
		restAttributes
	);
	return child ? child(attributes) : <span {...attributes}>{children}</span>;
}
