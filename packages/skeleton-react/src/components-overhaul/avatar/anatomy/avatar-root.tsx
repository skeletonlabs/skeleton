'use client';

import { useId } from 'react';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import * as avatar from '@zag-js/avatar';
import { AvatarRootContext } from '../modules/context.js';
import type { AvatarRootProps } from '../modules/types.js';

export default function (props: AvatarRootProps) {
	const [machineProps, componentProps] = avatar.splitProps(props);
	const { child, children, ...restAttributes } = componentProps;
	const service = useMachine(avatar.machine, {
		id: useId(),
		...machineProps
	});
	const api = avatar.connect(service, normalizeProps);
	const attributes = mergeProps(
		api.getRootProps(),
		{
			className: 'base:isolate base:bg-surface-400-600 base:size-16 base:rounded-full base:overflow-hidden'
		},
		restAttributes
	);
	return (
		<AvatarRootContext.Provider value={{ api }}>
			{child ? child(attributes) : <div {...attributes}>{children}</div>}
		</AvatarRootContext.Provider>
	);
}
