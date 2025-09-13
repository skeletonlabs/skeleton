import { machine, connect, type Props } from '@zag-js/toast';
import { normalizeProps, useMachine } from '@zag-js/react';
import { useId } from 'react';

export function useToast(props: Omit<Props, 'id'>) {
	const service = useMachine(machine, {
		id: useId(),
		...props
	});
	return connect(service, normalizeProps);
}
