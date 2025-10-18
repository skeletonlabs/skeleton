<script lang="ts">
	import { Portal, Tooltip } from '@skeletonlabs/skeleton-svelte';
</script>

<Tooltip dir="rtl">
	<Tooltip.Trigger>Hover Me</Tooltip.Trigger>
	<Portal>
		<Tooltip.Positioner>
			<Tooltip.Content class="card max-w-md p-2 bg-surface-100-900 shadow-xl">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente magni distinctio explicabo quisquam. Rerum impedit culpa nesciunt
				enim.
			</Tooltip.Content>
		</Tooltip.Positioner>
	</Portal>
</Tooltip>
