<script lang="ts" module>
	import type { NodeProps } from '@zag-js/tree-view';
	import type { Snippet } from 'svelte';

	export interface TreeViewNodeContextProps {
		children: Snippet<[() => NodeProps]>;
	}
</script>

<script lang="ts">
	import { NodeContext } from '../modules/node-context.js';

	const props: TreeViewNodeContextProps = $props();

	const nodeProps = NodeContext.consume();

	const { children } = $derived(props);
</script>

{@render children(nodeProps)}
