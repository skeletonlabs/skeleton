<script>
	import { Popover } from '@skeletonlabs/skeleton-svelte';
</script>

<Popover>
	<Popover.Trigger>Open</Popover.Trigger>
	<Popover.Positioner>
		<Popover.Content>
			<Popover.Arrow>
				<Popover.ArrowTip />
			</Popover.Arrow>
			<Popover.Title>Title</Popover.Title>
			<Popover.Description>Description</Popover.Description>
			<Popover.CloseTrigger />
		</Popover.Content>
	</Popover.Positioner>
</Popover>
