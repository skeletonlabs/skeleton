import { connect, machine } from '@zag-js/progress';
import type { Api, Props } from '@zag-js/progress';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useProgress(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const progress = $derived(connect(service, normalizeProps));
	return () => progress;
}
