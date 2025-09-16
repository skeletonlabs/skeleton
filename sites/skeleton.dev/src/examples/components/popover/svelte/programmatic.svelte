<script>
	import { Popover } from '@skeletonlabs/skeleton-svelte';

	let open = $state(false);

	function showAndHide() {
		open = true;
		setTimeout(() => {
			open = false;
		}, 3000);
	}
</script>

<div class="flex flex-col gap-4">
	<!-- Trigger -->
	<button class="btn preset-filled" onclick={showAndHide}>Show for 3 seconds</button>

	<!-- Popover -->
	<Popover {open} onOpenChange={(e) => open = e.open} closeOnInteractOutside={false}>
		<Popover.Trigger class="btn preset-tonal">Anchor</Popover.Trigger>
		<Popover.Positioner style="--z-index: 20 !important">
			<Popover.Content class="card max-w-sm p-4 bg-surface-100-900 shadow-xl space-y-2">
				<Popover.Description>
					<p>This popover will appear, stay open for three seconds, then close on it's own.</p>
				</Popover.Description>
			</Popover.Content>
		</Popover.Positioner>
	</Popover>
</div>
