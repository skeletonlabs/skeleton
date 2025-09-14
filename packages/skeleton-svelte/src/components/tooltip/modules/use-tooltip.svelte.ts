import { normalizeProps, useMachine } from '@zag-js/svelte';
import { type Api, connect, machine, type Props } from '@zag-js/tooltip';

export function useTooltip(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const tooltip = $derived(connect(service, normalizeProps));
	return () => tooltip;
}
