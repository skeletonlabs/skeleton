import { connect, machine } from '@zag-js/pagination';
import type { Api, Props } from '@zag-js/pagination';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';

export function usePagination(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const pagination = $derived(connect(service, normalizeProps));
	return () => pagination;
}
