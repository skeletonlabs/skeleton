<script>
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="grid grid-cols-2 gap-4">
	<Popover>
		<Popover.Trigger class="btn preset-filled">Default (auto)</Popover.Trigger>
		<Portal>
			<Popover.Positioner>
				<Popover.Content class="card max-w-md p-4 bg-surface-100-900 space-y-2">
					<Popover.Description>This example will be below the sibling.</Popover.Description>
				</Popover.Content>
			</Popover.Positioner>
		</Portal>
	</Popover>

	<Popover>
		<Popover.Trigger class="btn preset-filled">Above (20)</Popover.Trigger>
		<Portal>
			<Popover.Positioner class="z-20!">
				<Popover.Content class="card max-w-md p-4 bg-surface-100-900 shadow-xl space-y-2">
					<Popover.Description>This example will be above the sibling.</Popover.Description>
				</Popover.Content>
			</Popover.Positioner>
		</Portal>
	</Popover>

	<div class="col-span-2 h-[100px] relative">
		<div class="rounded bg-primary-200-800/75 w-full h-full z-10 flex justify-center items-center absolute">Sibling (10)</div>
	</div>
</div>
