import { type Api, connect, machine, type Props, type Service } from '@zag-js/menu';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { useId } from 'react';

export function useMenu(props: Omit<Props, 'id'> = {}): Api<PropTypes> & { service: Service } {
	const service = useMachine(machine, {
		id: useId(),
		...props,
	});
	return {
		...connect(service, normalizeProps),
		service,
	};
}
