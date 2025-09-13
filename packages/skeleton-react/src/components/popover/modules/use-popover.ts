import { machine, connect, type Props } from '@zag-js/popover';
import { normalizeProps, useMachine } from '@zag-js/react';
import { useId } from 'react';

export function usePopover(props: Omit<Props, 'id'>) {
	const service = useMachine(machine, {
		id: useId(),
		...props
	});
	return connect(service, normalizeProps);
}
