'use client';

import { useId, type ComponentProps } from 'react';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import { classesSwitch } from '@skeletonlabs/skeleton-common';
import { splitProps, machine, connect, type Props } from '@zag-js/switch';
import { SwitchRootContext } from '../modules/switch-root-context';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface SwitchRootProps extends PropsWithElement, Omit<Props, 'id'>, Omit<ComponentProps<'label'>, 'id' | 'dir'> {}

export default function (props: SwitchRootProps) {
	const [machineProps, componentProps] = splitProps(props);
	const { element, children, ...restAttributes } = componentProps;
	const service = useMachine(machine, {
		id: useId(),
		...machineProps
	});
	const api = connect(service, normalizeProps);
	const attributes = mergeProps(api.getRootProps(), { className: classesSwitch.root }, restAttributes);
	return (
		<SwitchRootContext.Provider value={{ api }}>
			{element ? element({ attributes }) : <label {...attributes}>{children}</label>}
		</SwitchRootContext.Provider>
	);
}
