import { connect, machine, type Props } from '@zag-js/dialog';
import { useMachine, normalizeProps } from '@zag-js/svelte';

export function useDialog(props: () => Props) {
	const service = useMachine(machine, props);
	const dialog = $derived(connect(service, normalizeProps));
	return () => dialog;
}
