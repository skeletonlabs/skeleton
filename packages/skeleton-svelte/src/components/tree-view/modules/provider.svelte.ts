import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';
import { connect, machine } from '@zag-js/tree-view';
import type { Api, Props } from '@zag-js/tree-view';

export function useTreeView(props: Props | (() => Props)): () => Api<PropTypes> {
	const service = useMachine(machine, props);
	const treeView = $derived(connect(service, normalizeProps));
	return () => treeView;
}
