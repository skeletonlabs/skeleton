'use client';

import { useId } from 'react';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import * as avatar from '@zag-js/avatar';
import { AvatarRootContext } from '../modules/context.js';
import type { AvatarRootProps } from '../modules/types.js';
import { avatarClasses } from '@skeletonlabs/skeleton-common';

export default function (props: AvatarRootProps) {
	const [machineProps, componentProps] = avatar.splitProps(props);
	const { element, children, ...restAttributes } = componentProps;
	const service = useMachine(avatar.machine, {
		id: useId(),
		...machineProps
	});
	const api = avatar.connect(service, normalizeProps);
	const attributes = mergeProps(
		api.getRootProps(),
		{
			className: avatarClasses.root
		},
		restAttributes
	);
	return (
		<AvatarRootContext.Provider value={{ api }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</AvatarRootContext.Provider>
	);
}
