import { splitProps, machine, connect, type Props } from '@zag-js/tooltip';
import { normalizeProps, useMachine } from '@zag-js/react';
import { useId, type PropsWithChildren } from 'react';
import { TooltipRootContext } from '../modules/root-context';

export interface TooltipRootProps extends PropsWithChildren, Omit<Props, 'id'> {}

export default function (props: TooltipRootProps) {
	const [machineProps, componentProps] = splitProps(props);
	const { children } = componentProps;

	const service = useMachine(machine, {
		id: useId(),
		...machineProps
	});

	const api = connect(service, normalizeProps);

	return <TooltipRootContext.Provider value={{ api }}>{children}</TooltipRootContext.Provider>;
}
