<script>
	import { GripVerticalIcon, MinimizeIcon, XIcon, MinusIcon, MaximizeIcon } from '@lucide/svelte';
	import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<FloatingPanel>
	<FloatingPanel.Trigger class="btn preset-filled">Open Panel</FloatingPanel.Trigger>
	<Portal>
		<FloatingPanel.Positioner class="z-50">
			<FloatingPanel.Content>
				<FloatingPanel.DragTrigger>
					<FloatingPanel.Header>
						<FloatingPanel.Title>
							<GripVerticalIcon class="size-4" />
							Floating Panel
						</FloatingPanel.Title>
						<FloatingPanel.Control>
							<FloatingPanel.StageTrigger stage="minimized">
								<MinusIcon class="size-4" />
							</FloatingPanel.StageTrigger>
							<FloatingPanel.StageTrigger stage="maximized">
								<MaximizeIcon class="size-4" />
							</FloatingPanel.StageTrigger>
							<FloatingPanel.StageTrigger stage="default">
								<MinimizeIcon class="size-4" />
							</FloatingPanel.StageTrigger>
							<FloatingPanel.CloseTrigger>
								<XIcon className="size-4" />
							</FloatingPanel.CloseTrigger>
						</FloatingPanel.Control>
					</FloatingPanel.Header>
				</FloatingPanel.DragTrigger>
				<FloatingPanel.Body>
					<p>
						This is a floating panel that can be dragged, resized, minimized, and maximized. Try dragging from the header or resizing from
						the bottom-right corner.
					</p>
					<FloatingPanel.ResizeTrigger className="bg-error-500/50" axis="n" />
					<FloatingPanel.ResizeTrigger className="bg-error-500/50" axis="e" />
					<FloatingPanel.ResizeTrigger className="bg-error-500/50" axis="w" />
					<FloatingPanel.ResizeTrigger className="bg-error-500/50" axis="s" />
					<FloatingPanel.ResizeTrigger className="bg-error-500/50" axis="ne" />
					<FloatingPanel.ResizeTrigger className="bg-error-500/50" axis="se" />
					<FloatingPanel.ResizeTrigger className="bg-error-500/50" axis="sw" />
					<FloatingPanel.ResizeTrigger className="bg-error-500/50" axis="nw" />
				</FloatingPanel.Body>
			</FloatingPanel.Content>
		</FloatingPanel.Positioner>
	</Portal>
</FloatingPanel>
