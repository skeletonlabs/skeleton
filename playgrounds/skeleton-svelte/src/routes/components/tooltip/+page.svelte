<script lang="ts">
	import { Portal, Tooltip } from '@skeletonlabs/skeleton-svelte';
</script>

<Tooltip>
	<Tooltip.Trigger>Trigger</Tooltip.Trigger>
	<Portal>
		<Tooltip.Positioner>
			<Tooltip.Content>
				Content
				<Tooltip.Arrow class="[--arrow-size:--spacing(2)] [--arrow-background:var(--color-surface-100-900)]">
					<Tooltip.ArrowTip />
				</Tooltip.Arrow>
			</Tooltip.Content>
		</Tooltip.Positioner>
	</Portal>
</Tooltip>
