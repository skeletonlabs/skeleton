import { type Api, connect, machine, type Props } from '@zag-js/dialog';
import { normalizeProps, useMachine } from '@zag-js/svelte';

export function useDialog(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const dialog = $derived(connect(service, normalizeProps));
	return () => dialog;
}
