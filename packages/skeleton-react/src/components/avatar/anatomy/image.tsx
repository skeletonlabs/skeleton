import { useContext } from 'react';
import { mergeProps } from '@zag-js/react';
import { AvatarRootContext } from '../modules/root-context';
import { classesAvatar } from '@skeletonlabs/skeleton-common';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface AvatarImageProps extends PropsWithElement<'img'>, Omit<HTMLAttributes<'img'>, 'children'> {}

export default function (props: AvatarImageProps) {
	const avatar = useContext(AvatarRootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(avatar.getImageProps(), rest, {
		className: classesAvatar.image
	});

	return element ? element(attributes) : <img {...attributes} />;
}
