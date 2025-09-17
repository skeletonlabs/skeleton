import { connect, machine } from '@zag-js/radio-group';
import type { Api, Props } from '@zag-js/radio-group';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useSegmentedControl(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const segmentedControl = connect(service, normalizeProps);
	return () => segmentedControl;
}
