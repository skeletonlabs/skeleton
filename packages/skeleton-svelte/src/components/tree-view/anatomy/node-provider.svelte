<script lang="ts" module>
	import type { PropsWithChildren } from '@/internal/props-with-children';

	export interface TreeViewNodeProviderProps extends PropsWithChildren {
		value: NodeProps;
	}
</script>

<script lang="ts">
	import { NodeContext } from '../modules/node-context';
	import type { NodeProps } from '@zag-js/tree-view';

	const props: TreeViewNodeProviderProps = $props();

	const { children, value: nodeProps } = $derived(props);

	NodeContext.provide(() => nodeProps);
</script>

{@render children?.()}
