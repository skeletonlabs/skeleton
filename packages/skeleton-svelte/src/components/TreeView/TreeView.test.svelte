<script lang="ts">
	import TreeView from './index.js';
	import type { TreeViewProps } from './types.js';

	const { ...allProps }: TreeViewProps = $props();
</script>

<TreeView {...allProps}>
	<TreeView.Branch id="LEVEL_1" value="node_modules">
		<TreeView.Item id="LEVEL_2.1" value="zag-js" />
	</TreeView.Branch>
</TreeView>
