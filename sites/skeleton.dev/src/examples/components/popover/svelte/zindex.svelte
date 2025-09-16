<script>
	import { Popover } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="grid grid-cols-2 gap-4">
	<!-- Has no inherent z-index -->
	<Popover>
		<Popover.Trigger class="btn preset-filled">Default</Popover.Trigger>
		<Popover.Positioner>
			<Popover.Content class="card max-w-md p-4 bg-surface-100-900 shadow-xl space-y-2">
				<Popover.Description>
					<p>This example will be below the sibling.</p>
				</Popover.Description>
			</Popover.Content>
		</Popover.Positioner>
	</Popover>

	<!-- Has a z-index of 20 -->
	<Popover>
		<Popover.Trigger class="btn preset-filled">Above</Popover.Trigger>
		<Popover.Positioner style="--z-index: 20;">
			<Popover.Content class="card max-w-md p-4 bg-surface-100-900 shadow-xl space-y-2">
				<Popover.Description>
					<p>This example will be above the sibling.</p>
				</Popover.Description>
			</Popover.Content>
		</Popover.Positioner>
	</Popover>

	<!-- Has a z-index of 10 -->
	<div class="col-span-2 h-[100px] relative">
		<div class="border-4 border-error-500 absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center">
			Sibling
		</div>
	</div>
</div>
