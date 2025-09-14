import { type Api, connect, machine, type Props } from '@zag-js/popover';
import { normalizeProps, useMachine } from '@zag-js/svelte';

export function usePopover(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const popover = $derived(connect(service, normalizeProps));
	return () => popover;
}
