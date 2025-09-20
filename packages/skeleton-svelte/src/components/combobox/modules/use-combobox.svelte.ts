import { type Api, connect, machine, type Props } from '@zag-js/combobox';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useCombobox(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const combobox = $derived(connect(service, normalizeProps));
	return () => combobox;
}
