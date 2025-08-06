'use client';

import { type FC, useId } from 'react';
import * as avatar from '@zag-js/avatar';
import { useMachine, normalizeProps } from '@zag-js/react';
import type { AvatarProps } from './types.js';

export const Avatar: FC<AvatarProps> = ({
	src,
	srcSet,
	name,
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
	initials,
	// Zag
	...zagProps
}) => {
	// Zag
	const service = useMachine(avatar.machine, {
		id: useId(),
		...zagProps
	});
	const api = avatar.connect(service, normalizeProps);

	const getInitials = (name: string, initials: number[] = [0, -1]) => {
		if (!name) return '';

		let nameArr = name.split(' ');

		return initials.map(index => {
			const namePart = nameArr.at(index);
			return namePart ? namePart.charAt(0).toUpperCase() : '';
		}).join('');
	}

	return (
		<figure
			{...api.getRootProps()}
			className={`${base} ${background} ${size} ${font} ${border} ${rounded} ${shadow} ${classes}`}
			style={style}
			data-testid="avatar"
		>
			{/* Image */}
			{(src || srcSet) && (
				<img
					src={src}
					srcSet={srcSet}
					alt={name}
					className={`${imageBase} ${imageClasses}`}
					data-testid="avatar-image"
					{...api.getImageProps()}
				/>
			)}
			{/* Fallback */}
			<span {...api.getFallbackProps()} className={`${fallbackBase} ${fallbackClasses}`} data-testid="avatar-fallback">
				{children ? children : getInitials(name, initials)}
			</span>
		</figure>
	);
};
