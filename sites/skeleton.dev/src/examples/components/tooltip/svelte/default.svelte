<script lang="ts">
	import { Tooltip } from '@skeletonlabs/skeleton-svelte';
</script>

<Tooltip>
	<Tooltip.Trigger class="btn preset-filled">Trigger</Tooltip.Trigger>
	<Tooltip.Positioner>
		<Tooltip.Content class="card max-w-md p-2 bg-surface-100-900 shadow-xl">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente magni distinctio explicabo quisquam. Rerum impedit culpa nesciunt
			enim.

			<Tooltip.Arrow>
				<Tooltip.ArrowTip />
			</Tooltip.Arrow>
		</Tooltip.Content>
	</Tooltip.Positioner>
</Tooltip>
