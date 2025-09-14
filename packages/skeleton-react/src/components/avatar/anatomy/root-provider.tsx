import { mergeProps } from '@zag-js/react';
import { classesAvatar } from '@skeletonlabs/skeleton-common';
import { AvatarRootContext } from '../modules/root-context';
import type { PropsWithElement } from '@/internal/props-with-element';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { useAvatar } from '../modules/use-avatar';

export interface AvatarRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	value: ReturnType<typeof useAvatar>;
}

export default function AvatarRootProvider(props: AvatarRootProviderProps) {
	const { element, children, value: avatar, ...rest } = props;

	const attributes = mergeProps(avatar.getRootProps(), rest, {
		className: classesAvatar.root,
	});

	return (
		<AvatarRootContext.Provider value={avatar}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</AvatarRootContext.Provider>
	);
}
