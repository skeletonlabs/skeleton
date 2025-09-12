import { useContext } from 'react';
import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { AvatarRootContext } from '../modules/root-context';
import { classesAvatar } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface AvatarImageProps extends PropsWithElement, Omit<HTMLAttributes<'img'>, 'children'> {}

export default function (props: AvatarImageProps) {
	const rootContext = useContext(AvatarRootContext);

	const { element, ...restAttributes } = props;

	const attributes = mergeProps(rootContext.api.getImageProps(), { className: classesAvatar.image }, restAttributes);

	return element ? element({ attributes }) : <img {...attributes} />;
}
