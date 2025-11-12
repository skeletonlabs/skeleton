import { type Api, connect, machine, type Props, type Service } from '@zag-js/menu';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function useMenu(props: Props | (() => Props)): () => Api<PropTypes> & { service: Service } {
	const service = useMachine(machine, props);
	const menu = $derived(connect(service, normalizeProps));
	return () => ({
		...menu,
		get service() {
			return service;
		},
	});
}
