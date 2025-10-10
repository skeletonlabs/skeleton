import { connect, machine } from '@zag-js/collapsible';
import type { Api, Props } from '@zag-js/collapsible';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useCollapsible(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const collapsible = $derived(connect(service, normalizeProps));
	return () => collapsible;
}
