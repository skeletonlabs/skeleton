<script lang="ts">
	import { Portal, Tooltip } from '@skeletonlabs/skeleton-svelte';
</script>

<Tooltip dir="rtl">
	<Tooltip.Trigger>Hover</Tooltip.Trigger>
	<Portal>
		<Tooltip.Positioner>
			<Tooltip.Content class="card bg-surface-100-900 p-2  shadow-xl">Hello Skeleton</Tooltip.Content>
		</Tooltip.Positioner>
	</Portal>
</Tooltip>
