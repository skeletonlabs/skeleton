<script lang="ts">
	import TreeViewDataDrivenItem from './TreeViewDataDrivenItem.svelte';
	import TreeViewItem from './TreeViewItem.svelte';
	import type { TreeViewNode } from './types.js';

	/** Provide data-driven nodes. */
	export let nodes: TreeViewNode[] = [];
</script>

{#each nodes as node}
	<TreeViewItem open={node.open} hideLead={!node.lead} hideChildren={!node.children || node.children.length === 0} disabled={node.disabled}>
		{@html node.content}
		<svelte:fragment slot="lead">
			{@html node.lead}
		</svelte:fragment>
		<svelte:fragment slot="children">
			<TreeViewDataDrivenItem nodes={node.children} />
		</svelte:fragment>
	</TreeViewItem>
{/each}
