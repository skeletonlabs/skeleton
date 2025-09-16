import { connect, machine } from '@zag-js/accordion';
import type { Api, Props } from '@zag-js/accordion';
import { normalizeProps, useMachine } from '@zag-js/react';
import { useId } from 'react';

export function useAccordion(props: Omit<Props, 'id'>): Api {
	const service = useMachine(machine, {
		id: useId(),
		...props,
	});
	return connect(service, normalizeProps);
}
