<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { NodeProps } from '@zag-js/tree-view';

	export interface TreeViewRootContextProps {
		children: Snippet<[() => NodeProps]>;
	}
</script>

<script lang="ts">
	import { NodeContext } from '../modules/node-context.js';

	const props: TreeViewRootContextProps = $props();

	const nodeProps = NodeContext.consume();

	const { children } = $derived(props);
</script>

{@render children(nodeProps)}
