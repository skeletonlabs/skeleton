import { connect, machine, type Api, type Props } from '@zag-js/avatar';
import { useMachine, normalizeProps } from '@zag-js/svelte';

export function useAvatar(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const avatar = $derived(connect(service, normalizeProps));
	return () => avatar;
}
