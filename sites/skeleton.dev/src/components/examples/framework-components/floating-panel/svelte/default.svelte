<script>
	import { ArrowDownLeft, XIcon, MinusIcon, MaximizeIcon } from '@lucide/svelte';
	import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<FloatingPanel>
	<FloatingPanel.Trigger class="btn preset-filled">Open Panel</FloatingPanel.Trigger>
	<Portal>
		<FloatingPanel.Positioner class="z-50">
			<FloatingPanel.Content class="card w-96 bg-surface-100-900 shadow-xl">
				<FloatingPanel.Header class="bg-surface-200-800 p-2">
					<div class="grid grid-cols-[1fr_auto] items-center gap-2">
						<FloatingPanel.DragTrigger class="cursor-move">
							<FloatingPanel.Title class="text-sm font-semibold px-2">Floating Panel</FloatingPanel.Title>
						</FloatingPanel.DragTrigger>
						<FloatingPanel.Control class="flex items-center gap-1">
							<FloatingPanel.StageTrigger stage="minimized" class="btn-icon btn-sm hover:preset-tonal">
								<MinusIcon class="size-4" />
							</FloatingPanel.StageTrigger>
							<FloatingPanel.StageTrigger stage="maximized" class="btn-icon btn-sm hover:preset-tonal">
								<MaximizeIcon class="size-4" />
							</FloatingPanel.StageTrigger>
							<FloatingPanel.StageTrigger stage="default" class="btn-icon btn-sm hover:preset-tonal">
								<ArrowDownLeft class="size-4" />
							</FloatingPanel.StageTrigger>
							<FloatingPanel.CloseTrigger class="btn-icon btn-sm hover:preset-tonal">
								<XIcon class="size-4" />
							</FloatingPanel.CloseTrigger>
						</FloatingPanel.Control>
					</div>
				</FloatingPanel.Header>
				<FloatingPanel.Body class="p-4 space-y-4">
					<p>This is a floating panel that can be dragged, resized, minimized, and maximized.</p>
					<p>Try dragging from the header or resizing from the bottom-right corner.</p>
				</FloatingPanel.Body>
				<FloatingPanel.ResizeTrigger axis="se" class="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize" />
			</FloatingPanel.Content>
		</FloatingPanel.Positioner>
	</Portal>
</FloatingPanel>
