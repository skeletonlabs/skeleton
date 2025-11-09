import { connect, machine } from '@zag-js/steps';
import type { Api, Props } from '@zag-js/steps';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useSteps(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const steps = $derived(connect(service, normalizeProps));
	return () => steps;
}
