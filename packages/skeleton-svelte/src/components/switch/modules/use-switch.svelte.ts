import { connect, machine, type Api, type Props } from '@zag-js/switch';
import { useMachine, normalizeProps } from '@zag-js/svelte';

export function useSwitch(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const switch_ = $derived(connect(service, normalizeProps));
	return () => switch_;
}
