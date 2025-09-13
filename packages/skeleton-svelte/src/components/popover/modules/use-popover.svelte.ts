import { connect, machine, type Api, type Props } from '@zag-js/popover';
import { useMachine, normalizeProps } from '@zag-js/svelte';

export function usePopover(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const popover = $derived(connect(service, normalizeProps));
	return () => popover;
}
