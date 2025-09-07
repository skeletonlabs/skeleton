import { useId, type PropsWithChildren } from 'react';
import { useMachine, normalizeProps } from '@zag-js/react';
import { splitProps, machine, connect, type Props } from '@zag-js/popover';
import { PopoverRootContext } from '../modules/popover-root-context';

export interface PopoverRootProps extends PropsWithChildren, Omit<Props, 'id'> {}

export default function (props: PopoverRootProps) {
	const [machineProps, componentProps] = splitProps(props);
	const { children } = componentProps;
	const service = useMachine(machine, {
		id: useId(),
		...machineProps
	});
	const api = connect(service, normalizeProps);
	return <PopoverRootContext.Provider value={{ api }}>{children}</PopoverRootContext.Provider>;
}
