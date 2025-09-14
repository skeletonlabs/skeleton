import { normalizeProps, useMachine } from '@zag-js/svelte';
import { type Api, connect, machine, type Props } from '@zag-js/switch';

export function useSwitch(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const switch_ = $derived(connect(service, normalizeProps));
	return () => switch_;
}
