import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';
import { connect, machine } from '@zag-js/tabs';
import type { Api, Props } from '@zag-js/tabs';

export function useTabs(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const tabs = $derived(connect(service, normalizeProps));
	return () => tabs;
}
