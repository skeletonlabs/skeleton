import { normalizeProps, useMachine } from '@zag-js/react';
import { connect, machine } from '@zag-js/tabs';
import type { Api, Props } from '@zag-js/tabs';
import { useId } from 'react';

export function useTabs(props: Omit<Props, 'id'>): Api {
	const service = useMachine(machine, {
		id: useId(),
		...props,
	});
	return connect(service, normalizeProps);
}
