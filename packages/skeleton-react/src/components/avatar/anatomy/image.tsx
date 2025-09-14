import { classesAvatar } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { AvatarRootContext } from '../modules/root-context';

export interface AvatarImageProps extends PropsWithElement<'img'>, HTMLAttributes<'img', 'children'> {}

export default function AvatarImage(props: AvatarImageProps) {
	const avatar = use(AvatarRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(avatar.getImageProps(), rest, {
		className: classesAvatar.image,
	});

	return element ? element(attributes) : <img {...attributes} />;
}
