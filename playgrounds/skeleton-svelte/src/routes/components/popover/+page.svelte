<script>
	import { Popover } from '@skeletonlabs/skeleton-svelte';
</script>

<Popover>
	<Popover.Trigger>Open</Popover.Trigger>
	<Popover.Positioner>
		<Popover.Arrow>
			<Popover.ArrowTip />
		</Popover.Arrow>
		<Popover.Content>
			<Popover.Title>Title</Popover.Title>
			<Popover.Description>Description</Popover.Description>
			<Popover.CloseTrigger>Close</Popover.CloseTrigger>
		</Popover.Content>
	</Popover.Positioner>
</Popover>
