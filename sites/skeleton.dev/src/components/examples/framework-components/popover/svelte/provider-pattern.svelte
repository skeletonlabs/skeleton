<script>
	import { Popover, Portal, usePopover } from "@skeletonlabs/skeleton-svelte";

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
		<Portal>
			<Popover.Positioner>
				<Popover.Content class="card bg-surface-100-900 max-w-sm space-y-2 p-4 shadow-xl">
					<Popover.Description
						>This popover will appear, stay open for three seconds, then close on it's
						own.</Popover.Description
					>
				</Popover.Content>
			</Popover.Positioner>
		</Portal>
	</Popover.Provider>
</div>
