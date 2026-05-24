import { LocaleProviderRootContext } from '../../locale-provider/modules/root-context.js';
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/svelte';
import { connect, machine } from '@zag-js/tree-view';
import type { Api, Props, TreeNode } from '@zag-js/tree-view';

export function useTreeView<T extends TreeNode = TreeNode>(props: Props<T> | (() => Props<T>)): () => Api<PropTypes> {
	const local = LocaleProviderRootContext.consume();
	const service = useMachine(machine, () => ({
		dir: local().dir,
		...(typeof props === 'function' ? props() : props),
	}));
	const treeView = $derived(connect(service, normalizeProps));
	return () => treeView;
}
