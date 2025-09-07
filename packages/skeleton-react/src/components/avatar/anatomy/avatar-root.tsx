import { useId, type ComponentProps } from 'react';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import { classesAvatar } from '@skeletonlabs/skeleton-common';
import { splitProps, machine, connect, type Props } from '@zag-js/avatar';
import { AvatarRootContext } from '../modules/avatar-root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface AvatarRootProps extends PropsWithElement, Omit<Props, 'id'>, Omit<ComponentProps<'div'>, 'id' | 'dir'> {}

export default function (props: AvatarRootProps) {
	const [machineProps, componentProps] = splitProps(props);
	const { element, children, ...restAttributes } = componentProps;
	const service = useMachine(machine, {
		id: useId(),
		...machineProps
	});
	const api = connect(service, normalizeProps);
	const attributes = mergeProps(
		api.getRootProps(),
		{
			className: classesAvatar.root
		},
		restAttributes
	);
	return (
		<AvatarRootContext.Provider value={{ api }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</AvatarRootContext.Provider>
	);
}
