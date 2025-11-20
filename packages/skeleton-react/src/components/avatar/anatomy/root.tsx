import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useAvatar } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import { classesAvatar } from '@skeletonlabs/skeleton-common';
import { splitProps } from '@zag-js/avatar';
import type { Props } from '@zag-js/avatar';
import { mergeProps } from '@zag-js/react';

export interface AvatarRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function AvatarRoot(props: AvatarRootProps) {
	const [avatarProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const avatar = useAvatar(avatarProps);

	const attributes = mergeProps(
		avatar.getRootProps(),
		{
			className: classesAvatar.root,
		},
		rest,
	);

	return (
		<RootContext.Provider value={avatar}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
