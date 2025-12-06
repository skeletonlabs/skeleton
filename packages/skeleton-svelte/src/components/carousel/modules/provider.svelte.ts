import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';
import { connect, machine } from '@zag-js/carousel';
import type { Api, Props } from '@zag-js/carousel';

export function useCarousel(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const carousel = $derived(connect(service, normalizeProps));
	return () => carousel;
}
