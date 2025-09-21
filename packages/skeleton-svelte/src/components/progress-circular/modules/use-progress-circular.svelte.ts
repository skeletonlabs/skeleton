import { connect, machine } from '@zag-js/progress';
import type { Api, Props } from '@zag-js/progress';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useProgressCircular(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const progressCircular = $derived(connect(service, normalizeProps));
	return () => progressCircular;
}
