<script lang="ts">
	import { Tooltip } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="grid grid-cols-2 gap-4">
	<Tooltip>
		<Tooltip.Trigger>Default (auto)</Tooltip.Trigger>
		<Tooltip.Positioner>
			<Tooltip.Content class="card max-w-md p-2 bg-surface-100-900 shadow-xl">This example will be below the sibling.</Tooltip.Content>
		</Tooltip.Positioner>
	</Tooltip>

	<Tooltip>
		<Tooltip.Trigger>Above (20)</Tooltip.Trigger>
		<Tooltip.Positioner class="z-20!">
			<Tooltip.Content class="card max-w-md p-2 bg-surface-100-900 shadow-xl">This example will be above the sibling.</Tooltip.Content>
		</Tooltip.Positioner>
	</Tooltip>

	<div class="col-span-2 h-[100px] relative">
		<div class="rounded bg-primary-200-800/75 w-full h-full z-10 flex justify-center items-center absolute">Sibling (10)</div>
	</div>
</div>
