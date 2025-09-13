import { connect, machine, type Props } from '@zag-js/tabs';
import { useMachine, normalizeProps } from '@zag-js/svelte';

export function useTabs(props: () => Props) {
	const service = useMachine(machine, props);
	const api = $derived(connect(service, normalizeProps));
	return () => api;
}
