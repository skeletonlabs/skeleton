import { connect, machine } from '@zag-js/radio-group';
import type { Api, Props } from '@zag-js/radio-group';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useSegmentedControl(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, () => ({
		orientation: 'horizontal' as const,
		...(typeof props === 'function' ? props() : props),
	}));
	const segmentedControl = $derived(connect(service, normalizeProps));
	return () => segmentedControl;
}
