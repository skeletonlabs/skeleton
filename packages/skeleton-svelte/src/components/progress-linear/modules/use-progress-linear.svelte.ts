import { connect, machine, type Api, type Props } from '@zag-js/progress';
import { useMachine, normalizeProps } from '@zag-js/svelte';

export function useProgressLinear(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const progressLinear = $derived(connect(service, normalizeProps));
	return () => progressLinear;
}
