import { type Api, connect, machine, type Props } from '@zag-js/rating-group';
import { normalizeProps, useMachine } from '@zag-js/svelte';

export function useRatingGroup(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const ratingGroup = $derived(connect(service, normalizeProps));
	return () => ratingGroup;
}
