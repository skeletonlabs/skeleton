<script lang="ts">
	import { Tooltip, useTooltip } from '@skeletonlabs/skeleton-svelte';

	const id = $props.id();
	const tooltip = useTooltip({ id });
</script>

<div class="grid gap-4">
	<button class="btn preset-filled-primary-500" onclick={() => tooltip().setOpen(!tooltip().open)}>
		Tooltip is {tooltip().open ? 'Open' : 'Closed'}
	</button>

	<Tooltip.Provider value={tooltip}>
		<Tooltip.Trigger class="btn preset-filled">Trigger</Tooltip.Trigger>
		<Tooltip.Positioner>
			<Tooltip.Content class="card max-w-md p-2 bg-surface-100-900 shadow-xl">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente magni distinctio explicabo quisquam. Rerum impedit culpa nesciunt
				enim.
			</Tooltip.Content>
		</Tooltip.Positioner>
	</Tooltip.Provider>
</div>
