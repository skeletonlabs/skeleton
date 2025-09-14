import { normalizeProps, useMachine } from '@zag-js/svelte';
import { type Api, connect, machine, type Props } from '@zag-js/tabs';

export function useTabs(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const tabs = $derived(connect(service, normalizeProps));
	return () => tabs;
}
