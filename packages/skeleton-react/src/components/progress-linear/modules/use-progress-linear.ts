import { machine, connect, type Props, type Api } from '@zag-js/progress';
import { normalizeProps, useMachine } from '@zag-js/react';
import { useId } from 'react';

export function useProgressLinear(props: Omit<Props, 'id'>): Api {
	const service = useMachine(machine, {
		id: useId(),
		...props,
	});
	return connect(service, normalizeProps);
}
