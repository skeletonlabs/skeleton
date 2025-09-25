import { type Api, connect, machine, type Props } from '@zag-js/dialog';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useDialog(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const dialog = $derived(connect(service, normalizeProps));
	return () => dialog;
}
