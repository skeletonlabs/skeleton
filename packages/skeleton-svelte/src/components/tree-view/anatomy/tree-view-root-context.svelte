<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { TreeViewRootContextType } from '../modules/tree-view-root-context.js';

	export interface TreeViewRootContextProps {
		children: Snippet<[TreeViewRootContextType]>;
	}
</script>

<script lang="ts">
	import { TreeViewRootContext } from '../modules/tree-view-root-context.js';

	const props: TreeViewRootContextProps = $props();
	const rootContext = TreeViewRootContext.consume();
</script>

{@render props.children(rootContext)}
