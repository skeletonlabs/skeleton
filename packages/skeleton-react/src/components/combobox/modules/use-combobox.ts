import { machine, connect, type Props } from '@zag-js/combobox';
import { normalizeProps, useMachine } from '@zag-js/react';
import { useId } from 'react';

export function useCombobox(props: Omit<Props, 'id'>) {
	const service = useMachine(machine, {
		id: useId(),
		...props
	});
	return connect(service, normalizeProps);
}
