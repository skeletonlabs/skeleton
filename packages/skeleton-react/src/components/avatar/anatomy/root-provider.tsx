import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { useAvatar } from '../modules/provider.js';
import { AvatarRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';

export interface AvatarRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	value: ReturnType<typeof useAvatar>;
}

export default function AvatarRootProvider(props: AvatarRootProviderProps) {
	const { element, children, value: avatar, ...rest } = props;

	const attributes = mergeProps(avatar.getRootProps(), rest);

	return (
		<AvatarRootContext.Provider value={avatar}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</AvatarRootContext.Provider>
	);
}
