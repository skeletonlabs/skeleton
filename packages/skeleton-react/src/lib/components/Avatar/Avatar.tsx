'use client';

import React, { useId } from 'react';
import * as avatar from '@zag-js/avatar';
import { useMachine, normalizeProps } from '@zag-js/react';
import { AvatarProps } from './types.js';

export const Avatar: React.FC<AvatarProps> = ({
	src = '',
	srcSet = '',
	name = '',
	filter = '',
	// Root
	base = 'overflow-hidden isolate',
	background = 'bg-surface-400-600',
	size = 'size-16',
	font = '',
	border = '',
	rounded = 'rounded-full',
	shadow = '',
	classes = '',
	// Image
	imageBase = 'w-full object-cover',
	imageClasses = '',
	// Children
	fallbackBase = 'w-full h-full flex justify-center items-center',
	fallbackClasses = '',
	// Children
	children
}) => {
	const [state, send] = useMachine(avatar.machine({ id: useId() }));
	const api = avatar.connect(state, send, normalizeProps);

	function getInitials(name: string) {
		return name
			.split(' ')
			.map((word) => word[0])
			.join('');
	}

	return (
		<figure
			{...api.getRootProps()}
			className={`${base} ${background} ${size} ${font} ${border} ${rounded} ${shadow} ${classes}`}
			data-testid="avatar"
		>
			{/* Image */}
			<img
				{...api.getImageProps()}
				src={src}
				srcSet={srcSet}
				alt={name}
				className={`${imageBase} ${imageClasses}`}
				style={{ filter: filter ? `url(${filter})` : undefined }}
			/>
			{/* Fallback */}
			<span {...api.getFallbackProps()} className={`${fallbackBase} ${fallbackClasses}`}>
				{children ? children : getInitials(name)}
			</span>
		</figure>
	);
};
