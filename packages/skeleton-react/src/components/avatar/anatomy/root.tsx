import type { HTMLAttributes } from '@/internal/html-attributes';
import { mergeProps } from '@zag-js/react';
import { classesAvatar } from '@skeletonlabs/skeleton-common';
import { splitProps, type Props } from '@zag-js/avatar';
import { AvatarRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import { useAvatar } from '../modules/use-avatar';

export interface AvatarRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function (props: AvatarRootProps) {
	const [avatarProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const avatar = useAvatar(avatarProps);

	const attributes = mergeProps(avatar.getRootProps(), rest, {
		className: classesAvatar.root
	});

	return (
		<AvatarRootContext.Provider value={avatar}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</AvatarRootContext.Provider>
	);
}
