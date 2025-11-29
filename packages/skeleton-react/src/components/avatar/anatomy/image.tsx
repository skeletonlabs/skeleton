import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { RootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

export interface AvatarImageProps extends PropsWithElement<'img'>, HTMLAttributes<'img', 'children'> {}

export default function Image(props: AvatarImageProps) {
	const avatar = use(RootContext);

	const { element, ...rest } = props;

	const attributes = mergeProps(
		avatar.getImageProps(),
		rest,
	);

	return element ? element(attributes) : <img {...attributes} />;
}
