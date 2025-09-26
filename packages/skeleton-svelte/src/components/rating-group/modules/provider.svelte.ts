import { connect, machine } from '@zag-js/rating-group';
import type { Api, Props } from '@zag-js/rating-group';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useRatingGroup(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const ratingGroup = $derived(connect(service, normalizeProps));
	return () => ratingGroup;
}
