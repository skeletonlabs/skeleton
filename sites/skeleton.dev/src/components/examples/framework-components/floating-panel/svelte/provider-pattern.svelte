<script>
	import { XIcon } from '@lucide/svelte';
	import { FloatingPanel, Portal, useFloatingPanel } from '@skeletonlabs/skeleton-svelte';

	const id = $props.id();
	const floatingPanel = useFloatingPanel({
		id: id,
		defaultOpen: false,
	});

	function openPanel() {
		floatingPanel().setOpen(true);
	}
</script>

<div class="flex flex-col gap-4">
	<button class="btn preset-filled" onclick={openPanel}>Open Panel Programmatically</button>

	<FloatingPanel.Provider value={floatingPanel}>
		<FloatingPanel.Trigger class="btn preset-tonal">Or Click Here</FloatingPanel.Trigger>
		<Portal>
			<FloatingPanel.Positioner class="z-50">
				<FloatingPanel.Content class="card w-96 bg-surface-100-900 shadow-xl overflow-hidden">
					<FloatingPanel.Header class="bg-surface-200-800 p-2">
						<div class="grid grid-cols-[1fr_auto] items-center gap-2">
							<FloatingPanel.DragTrigger class="cursor-move">
								<FloatingPanel.Title class="text-sm font-semibold px-2">Provider Pattern</FloatingPanel.Title>
							</FloatingPanel.DragTrigger>
							<FloatingPanel.CloseTrigger class="btn-icon btn-sm hover:preset-tonal">
								<XIcon class="size-4" />
							</FloatingPanel.CloseTrigger>
						</div>
					</FloatingPanel.Header>
					<FloatingPanel.Body class="p-4">
						<p>This panel can be controlled programmatically using the provider pattern.</p>
					</FloatingPanel.Body>
				</FloatingPanel.Content>
			</FloatingPanel.Positioner>
		</Portal>
	</FloatingPanel.Provider>
</div>
