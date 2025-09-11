<script lang="ts">
	import { Tooltip } from '@skeletonlabs/skeleton-svelte';
</script>

<Tooltip>
	<Tooltip.Trigger>Trigger</Tooltip.Trigger>
	<Tooltip.Positioner>
		<Tooltip.Content>
			Content
			<Tooltip.Arrow>
				<Tooltip.ArrowTip />
			</Tooltip.Arrow>
		</Tooltip.Content>
	</Tooltip.Positioner>
</Tooltip>
