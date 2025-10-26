<script lang="ts" module>
	import type { useTreeView } from '../modules/provider.svelte';
	import type { Snippet } from 'svelte';

	export interface TreeViewRootContextProps {
		children: Snippet<[ReturnType<typeof useTreeView>]>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';

	const props: TreeViewRootContextProps = $props();

	const treeView = RootContext.consume();

	const { children } = $derived(props);
</script>

{@render children(treeView)}
