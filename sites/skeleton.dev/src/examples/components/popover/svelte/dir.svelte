<script>
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<Popover dir="rtl">
	<Popover.Trigger class="btn preset-filled">Trigger</Popover.Trigger>
	<Portal>
		<Popover.Positioner>
			<Popover.Content class="card max-w-md p-4 bg-surface-100-900 shadow-xl space-y-2">
				<Popover.Title class="font-bold">Example</Popover.Title>
				<Popover.Description>This is a basic example of a popover.</Popover.Description>
				<Popover.CloseTrigger class="btn preset-tonal">Close</Popover.CloseTrigger>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
