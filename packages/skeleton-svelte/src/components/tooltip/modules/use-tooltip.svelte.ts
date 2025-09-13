import { connect, machine, type Props } from '@zag-js/tooltip';
import { useMachine, normalizeProps } from '@zag-js/svelte';

export function useTooltip(props: () => Props) {
	const service = useMachine(machine, props);
	const tooltip = $derived(connect(service, normalizeProps));
	return () => tooltip;
}
