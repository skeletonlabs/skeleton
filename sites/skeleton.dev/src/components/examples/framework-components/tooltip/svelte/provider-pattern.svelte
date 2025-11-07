<script lang="ts">
	import { Portal, Tooltip, useTooltip } from '@skeletonlabs/skeleton-svelte';

	const id = $props.id();
	const tooltip = useTooltip({ id });
</script>

<div class="grid gap-4">
	<button class="btn preset-filled w-[150px]" onclick={() => tooltip().setOpen(!tooltip().open)}>Trigger</button>
	<Tooltip.Provider value={tooltip}>
		<Tooltip.Trigger>Anchor ({tooltip().open ? 'open' : 'closed'})</Tooltip.Trigger>
		<Portal>
			<Tooltip.Positioner>
				<Tooltip.Content class="card bg-surface-100-900 p-2  shadow-xl">Hello Skeleton</Tooltip.Content>
			</Tooltip.Positioner>
		</Portal>
	</Tooltip.Provider>
</div>
