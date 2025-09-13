import { connect, machine, type Props } from '@zag-js/switch';
import { useMachine, normalizeProps } from '@zag-js/svelte';

export function useSwitch(props: () => Props) {
	const service = useMachine(machine, props);
	const switch_ = $derived(connect(service, normalizeProps));
	return () => switch_;
}
