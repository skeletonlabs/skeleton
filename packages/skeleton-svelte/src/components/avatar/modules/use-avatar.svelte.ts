import { type Api, connect, machine, type Props } from '@zag-js/avatar';
import { normalizeProps, useMachine } from '@zag-js/svelte';

export function useAvatar(props: Props | (() => Props)): () => Api {
	const service = useMachine(machine, props);
	const avatar = $derived(connect(service, normalizeProps));
	return () => avatar;
}
