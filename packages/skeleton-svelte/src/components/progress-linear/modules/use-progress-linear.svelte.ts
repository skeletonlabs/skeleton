import { connect, machine } from '@zag-js/progress';
import type { Api, Props } from '@zag-js/progress';
import { normalizeProps, useMachine } from '@zag-js/svelte';

export function useProgressLinear(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const progressLinear = $derived(connect(service, normalizeProps));
	return () => progressLinear;
}
