import { connect, machine, type Props } from '@zag-js/accordion';
import { useMachine, normalizeProps } from '@zag-js/svelte';

export function useAccordion(props: () => Props) {
	const service = useMachine(machine, props);
	const api = $derived(connect(service, normalizeProps));
	return () => api;
}
