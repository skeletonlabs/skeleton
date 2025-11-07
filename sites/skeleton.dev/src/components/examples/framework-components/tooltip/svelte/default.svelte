<script lang="ts">
	import { Portal, Tooltip } from '@skeletonlabs/skeleton-svelte';
</script>

<Tooltip positioning={{ placement: 'top' }}>
	<Tooltip.Trigger>Hover</Tooltip.Trigger>
	<Portal>
		<Tooltip.Positioner>
			<Tooltip.Content class="card p-2 preset-filled-surface-950-50">
				<span>Hello Skeleton</span>
				<Tooltip.Arrow style="--arrow-size: calc(var(--spacing) * 2); --arrow-background: var(--color-surface-950-50);">
					<Tooltip.ArrowTip />
				</Tooltip.Arrow>
			</Tooltip.Content>
		</Tooltip.Positioner>
	</Portal>
</Tooltip>
