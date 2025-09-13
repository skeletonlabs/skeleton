import { machine, connect, type Props, type Api } from '@zag-js/tabs';
import { normalizeProps, useMachine } from '@zag-js/react';
import { useId } from 'react';

export function useTabs(props: Omit<Props, 'id'>): Api {
	const service = useMachine(machine, {
		id: useId(),
		...props
	});
	return connect(service, normalizeProps);
}
