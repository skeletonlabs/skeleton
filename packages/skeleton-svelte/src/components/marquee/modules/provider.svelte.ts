import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';
import { type Api, connect, machine, type Props } from '@zag-js/marquee';

export function useMarquee(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const marquee = $derived(connect(service, normalizeProps));
	return () => marquee;
}
