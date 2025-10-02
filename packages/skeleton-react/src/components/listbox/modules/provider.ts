import { type Api, connect, machine, type Props } from '@zag-js/listbox';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { useId } from 'react';

export function useListbox(props: Omit<Props, 'id'>): Api<PropTypes> {
	const service = useMachine(machine, {
		id: useId(),
		...props,
	});
	return connect(service, normalizeProps);
}
