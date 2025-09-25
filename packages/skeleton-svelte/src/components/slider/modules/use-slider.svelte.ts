import { connect, machine } from '@zag-js/slider';
import type { Api, Props } from '@zag-js/slider';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useSlider(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const slider = $derived(connect(service, normalizeProps));
	return () => slider;
}
