import { machine, connect, type Props, type Api } from '@zag-js/avatar';
import { normalizeProps, useMachine } from '@zag-js/react';
import { useId } from 'react';

export function useAvatar(props: Omit<Props, 'id'>): Api {
	const service = useMachine(machine, {
		id: useId(),
		...props,
	});
	return connect(service, normalizeProps);
}
