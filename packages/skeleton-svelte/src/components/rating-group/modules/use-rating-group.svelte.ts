import { connect, machine, type Api, type Props } from '@zag-js/rating-group';
import { useMachine, normalizeProps } from '@zag-js/svelte';

export function useRatingGroup(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const ratingGroup = $derived(connect(service, normalizeProps));
	return () => ratingGroup;
}
