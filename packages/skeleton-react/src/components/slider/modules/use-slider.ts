import { normalizeProps, useMachine, type PropTypes } from '@zag-js/react';
import { connect, machine } from '@zag-js/slider';
import type { Api, Props } from '@zag-js/slider';
import { useId } from 'react';

export function useSlider(props: Omit<Props, 'id'> = {}): Api<PropTypes> {
	const service = useMachine(machine, {
		id: useId(),
		...props,
	});
	return connect(service, normalizeProps);
}
