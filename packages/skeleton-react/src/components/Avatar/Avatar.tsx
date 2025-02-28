'use client';

import React, { useId } from 'react';
import * as avatar from '@zag-js/avatar';
import { useMachine, normalizeProps } from '@zag-js/react';
import { AvatarProps } from './types.js';

export const Avatar: React.FC<AvatarProps> = ({
	src,
	srcSet,
	name,
	filter,
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
	style,
	// Fallback
	fallbackBase = 'w-full h-full flex justify-center items-center',
	fallbackClasses = '',
	// Children
	children,
	// Zag
	...zagProps
}) => {
	// Zag
	const service = useMachine(avatar.machine, {
		id: useId(),
		...zagProps
	});
	const api = avatar.connect(service, normalizeProps);

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
			{(src || srcSet) && (
				<img
					src={src}
					srcSet={srcSet}
					alt={name}
					className={`${imageBase} ${imageClasses}`}
					style={{ ...style, filter: filter ? `url(${filter})` : undefined }}
					data-testid="avatar-image"
					{...api.getImageProps()}
				/>
			)}
			{/* Fallback */}
			<span {...api.getFallbackProps()} className={`${fallbackBase} ${fallbackClasses}`} data-testid="avatar-fallback">
				{children ? children : getInitials(name)}
			</span>
		</figure>
	);
};
