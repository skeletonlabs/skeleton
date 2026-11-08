<script lang="ts">
	import { Portal, Tooltip } from "@skeletonlabs/skeleton-svelte";
</script>

<div class="grid grid-cols-2 gap-4">
	<Tooltip>
		<Tooltip.Trigger>Default (auto)</Tooltip.Trigger>
		<Portal>
			<Tooltip.Positioner>
				<Tooltip.Content class="card bg-surface-100-900 p-2  shadow-xl"
					>This example will be below the sibling.</Tooltip.Content
				>
			</Tooltip.Positioner>
		</Portal>
	</Tooltip>

	<Tooltip>
		<Tooltip.Trigger>Above (20)</Tooltip.Trigger>
		<Portal>
			<Tooltip.Positioner class="z-20!">
				<Tooltip.Content class="card bg-surface-100-900 p-2  shadow-xl"
					>This example will be above the sibling.</Tooltip.Content
				>
			</Tooltip.Positioner>
		</Portal>
	</Tooltip>

	<div class="relative col-span-2 h-[100px]">
		<div
			class="bg-primary-200-800/75 absolute z-10 flex h-full w-full items-center justify-center rounded"
		>
			Sibling (10)
		</div>
	</div>
</div>
