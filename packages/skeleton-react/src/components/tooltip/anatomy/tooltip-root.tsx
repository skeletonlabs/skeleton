import { splitProps, machine, connect, type Props } from '@zag-js/tooltip';
import { mergeProps, normalizeProps, useMachine } from '@zag-js/react';
import { useId, type ComponentProps } from 'react';
import { TooltipRootContext } from '../modules/tooltip-root-context';
import { classesTooltip } from '@skeletonlabs/skeleton-common';
import type { PropsWithElement } from '@/internal/props-with-element';

export interface TooltipRootProps extends PropsWithElement, Omit<Props, 'id'>, Omit<ComponentProps<'div'>, 'id' | 'defaultValue' | 'dir'> {}

export default function (props: TooltipRootProps) {
	const [machineProps, componentProps] = splitProps(props);
	const { element, children, ...restAttributes } = componentProps;
	const service = useMachine(machine, {
		id: useId(),
		...machineProps
	});
	const api = connect(service, normalizeProps);
	const attributes = mergeProps({ className: classesTooltip.root }, restAttributes);
	return (
		<TooltipRootContext.Provider value={{ api }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</TooltipRootContext.Provider>
	);
}
