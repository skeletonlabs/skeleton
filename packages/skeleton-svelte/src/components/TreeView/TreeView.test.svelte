<script lang="ts">
	import type { Snippet } from 'svelte';
	import TreeView from './index.js';
	import type { TreeBranchProps, TreeItemProps, TreeViewProps } from './types.js';

	const { ...allProps }: TreeViewProps & { indicator?: Snippet; branchIcon?: Snippet; itemIcon?: Snippet } = $props();
</script>

<TreeView {...allProps}>
	<TreeView.Branch id="LEVEL_1" value="node_modules">
		<TreeView.Item id="LEVEL_2.1" value="zag-js" />
	</TreeView.Branch>
</TreeView>
