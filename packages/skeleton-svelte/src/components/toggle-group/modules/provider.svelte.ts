import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';
import { type Api, connect, machine, type Props } from '@zag-js/toggle-group';

export function useToggleGroup(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const toggleGroup = $derived(connect(service, normalizeProps));
	return () => toggleGroup;
}
