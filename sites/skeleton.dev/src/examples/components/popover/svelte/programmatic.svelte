<script>
	import { Popover, usePopover } from '@skeletonlabs/skeleton-svelte';

	const id = $props.id();
	const popover = usePopover({
		id: id,
		closeOnInteractOutside: false,
	});

	function showAndHide() {
		popover().setOpen(true);
		setTimeout(() => {
			popover().setOpen(false);
		}, 3000);
	}
</script>

<div class="flex flex-col gap-4">
	<button class="btn preset-filled" onclick={showAndHide}>Show for 3 seconds</button>

	<Popover.Provider value={popover}>
		<Popover.Trigger class="btn preset-tonal">Anchor</Popover.Trigger>
		<Popover.Positioner>
			<Popover.Content class="card max-w-sm p-4 bg-surface-100-900 shadow-xl space-y-2">
				<Popover.Description>This popover will appear, stay open for three seconds, then close on it's own.</Popover.Description>
			</Popover.Content>
		</Popover.Positioner>
	</Popover.Provider>
</div>
