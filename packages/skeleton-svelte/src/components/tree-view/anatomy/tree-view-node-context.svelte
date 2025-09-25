<script lang="ts" module>
	import type { TreeViewNodeContextType } from '../modules/tree-view-node-context.js';
	import type { Snippet } from 'svelte';

	export interface TreeViewNodeContextProps {
		children: Snippet<[TreeViewNodeContextType]>;
	}
</script>

<script lang="ts">
	import { TreeViewNodeContext } from '../modules/tree-view-node-context.js';

	const props: TreeViewNodeContextProps = $props();
	const nodeContext = TreeViewNodeContext.consume();
</script>

{@render props.children(nodeContext)}
