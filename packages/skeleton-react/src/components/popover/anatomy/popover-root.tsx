import { useId, type ComponentProps } from 'react';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import { classesPopover } from '@skeletonlabs/skeleton-common';
import { splitProps, machine, connect, type Props } from '@zag-js/popover';
import { PopoverRootContext } from '../modules/popover-root-context.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';

export interface PopoverRootProps extends PropsWithElement, Omit<Props, 'id'>, Omit<ComponentProps<'div'>, 'id' | 'dir'> {}

export default function (props: PopoverRootProps) {
	const [machineProps, componentProps] = splitProps(props);
	const { element, children, ...restAttributes } = componentProps;
	const service = useMachine(machine, {
		id: useId(),
		...machineProps
	});
	const api = connect(service, normalizeProps);
	const attributes = mergeProps(
		{
			className: classesPopover.root
		},
		restAttributes
	);
	return (
		<PopoverRootContext.Provider value={{ api }}>
			{element ? element({ attributes }) : <div {...attributes}>{children}</div>}
		</PopoverRootContext.Provider>
	);
}
