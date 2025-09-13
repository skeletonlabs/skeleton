import { connect, machine, type Props } from '@zag-js/avatar';
import { useMachine, normalizeProps } from '@zag-js/svelte';

export function useAvatar(props: () => Props) {
	const service = useMachine(machine, props);
	const avatar = $derived(connect(service, normalizeProps));
	return () => avatar;
}
