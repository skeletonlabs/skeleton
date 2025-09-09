import { useId, type PropsWithChildren } from 'react';
import { useMachine, normalizeProps } from '@zag-js/react';
import { splitProps, machine, connect, type Props } from '@zag-js/dialog';
import { DialogRootContext } from '../modules/root-context';

export interface DialogRootProps extends PropsWithChildren, Omit<Props, 'id'> {}

export default function (props: DialogRootProps) {
	const [machineProps, componentProps] = splitProps(props);
	const { children } = componentProps;

	const service = useMachine(machine, {
		id: useId(),
		...machineProps
	});

	const api = connect(service, normalizeProps);

	return <DialogRootContext.Provider value={{ api }}>{children}</DialogRootContext.Provider>;
}
