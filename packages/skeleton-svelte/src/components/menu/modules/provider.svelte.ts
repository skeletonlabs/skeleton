import { type Api, connect, machine, type Props } from '@zag-js/menu';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useMenu(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const menu = $derived(connect(service, normalizeProps));
	return () => ({
		...menu,
		getService() {
			return service;
		},
	});
}
