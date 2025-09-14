import { normalizeProps, useMachine } from '@zag-js/react';
import { type Api, connect, machine, type Props } from '@zag-js/tooltip';
import { useId } from 'react';

export function useTooltip(props: Omit<Props, 'id'>): Api {
	const service = useMachine(machine, {
		id: useId(),
		...props,
	});
	return connect(service, normalizeProps);
}
