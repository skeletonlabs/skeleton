import { type Api, connect, machine, type Props } from '@zag-js/listbox';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useListbox(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const listbox = $derived(connect(service, normalizeProps));
	return () => listbox;
}
