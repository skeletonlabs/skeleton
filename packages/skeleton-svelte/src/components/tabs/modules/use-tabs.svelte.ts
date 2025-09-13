import { connect, machine, type Api, type Props } from '@zag-js/tabs';
import { useMachine, normalizeProps } from '@zag-js/svelte';

export function useTabs(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const tabs = $derived(connect(service, normalizeProps));
	return () => tabs;
}
