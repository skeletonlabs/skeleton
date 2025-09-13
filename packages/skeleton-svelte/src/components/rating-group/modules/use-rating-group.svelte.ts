import { connect, machine, type Props } from '@zag-js/rating-group';
import { useMachine, normalizeProps } from '@zag-js/svelte';

export function useRatingGroup(props: () => Props) {
	const service = useMachine(machine, props);
	const api = $derived(connect(service, normalizeProps));
	return () => api;
}
