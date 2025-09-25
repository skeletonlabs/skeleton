<script lang="ts" module>
	import type { useTreeView } from '../modules/use-tree-view.svelte';
	import type { Snippet } from 'svelte';

	export interface TreeViewRootContextProps {
		children: Snippet<[ReturnType<typeof useTreeView>]>;
	}
</script>

<script lang="ts">
	import { TreeViewRootContext } from '../modules/root-context';

	const props: TreeViewRootContextProps = $props();

	const treeView = TreeViewRootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(treeView)}
