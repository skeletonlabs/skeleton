import { splitProps, machine, connect, type Props } from '@zag-js/tabs';
import { mergeProps, normalizeProps, useMachine } from '@zag-js/react';
import { useId, type ComponentProps } from 'react';
import { TabsRootContext } from '../modules/tabs-root-context.js';
import type { PropsWithElement } from '@/internal/props-with-element';
import { classesTabs } from '@skeletonlabs/skeleton-common';

export interface TabsRootProps extends PropsWithElement, Omit<Props, 'id'>, Omit<ComponentProps<'div'>, 'id' | 'defaultValue' | 'dir'> {}

export default function (props: TabsRootProps) {
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
			className: classesTabs.root
		},
		restAttributes
	);
	return (
		<TabsRootContext.Provider value={{ api }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</TabsRootContext.Provider>
	);
}
