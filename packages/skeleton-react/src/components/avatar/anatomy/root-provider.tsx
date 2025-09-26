import type { useAvatar } from '../modules/provider';
import { RootContext } from '../modules/root-context';
import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesAvatar } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';

export interface AvatarRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	value: ReturnType<typeof useAvatar>;
}

export default function AvatarRootProvider(props: AvatarRootProviderProps) {
	const { element, children, value: avatar, ...rest } = props;

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
