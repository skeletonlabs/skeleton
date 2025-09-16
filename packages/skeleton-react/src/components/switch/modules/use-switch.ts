import { normalizeProps, useMachine } from '@zag-js/react';
import { connect, machine } from '@zag-js/switch';
import type { Api, Props } from '@zag-js/switch';
import { useId } from 'react';

export function useSwitch(props: Omit<Props, 'id'>): Api {
	const service = useMachine(machine, {
		id: useId(),
		...props,
	});
	return connect(service, normalizeProps);
}
