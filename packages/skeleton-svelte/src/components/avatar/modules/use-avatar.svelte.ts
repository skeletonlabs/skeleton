import { connect, machine } from '@zag-js/avatar';
import type { Api, Props } from '@zag-js/avatar';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useAvatar(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const avatar = $derived(connect(service, normalizeProps));
	return () => avatar;
}
