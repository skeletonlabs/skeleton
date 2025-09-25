import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { connect, machine } from '@zag-js/tree-view';
import type { Api, Props } from '@zag-js/tree-view';
import { useId } from 'react';

export function useTreeView(props: Omit<Props, 'id'> = {}): Api<PropTypes> {
	const service = useMachine(machine, {
		id: useId(),
		...props,
	});
	return connect(service, normalizeProps);
}
