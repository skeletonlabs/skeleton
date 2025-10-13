import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';
import { connect, machine } from '@zag-js/toggle-group';
import type { Api, Props } from '@zag-js/toggle-group';

export function useToggleGroup(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, {
		...(typeof props === 'function' ? props() : props),
	});
	const toggleGroup = connect(service, normalizeProps);
	return () => toggleGroup;
}
