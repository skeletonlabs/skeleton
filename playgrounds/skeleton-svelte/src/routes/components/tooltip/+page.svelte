<script lang="ts">
	import { Tooltip } from '@skeletonlabs/skeleton-svelte';
</script>

<Tooltip>
	<Tooltip.Trigger>Trigger</Tooltip.Trigger>
	<Tooltip.Positioner>
		<Tooltip.Content>
			<Tooltip.Arrow>
				<Tooltip.ArrowTip />
			</Tooltip.Arrow>
			Content
		</Tooltip.Content>
	</Tooltip.Positioner>
</Tooltip>
