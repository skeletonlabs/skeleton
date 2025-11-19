<script>
	import { ArrowDownLeft, XIcon, MinusIcon, MaximizeIcon } from '@lucide/svelte';
	import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<FloatingPanel>
	<FloatingPanel.Trigger class="btn preset-filled">Open Panel</FloatingPanel.Trigger>
	<Portal>
		<FloatingPanel.Positioner class="z-50">
			<FloatingPanel.Content>
				<FloatingPanel.Header>
					<FloatingPanel.DragTrigger>
						<FloatingPanel.Title>Floating Panel</FloatingPanel.Title>
					</FloatingPanel.DragTrigger>
					<FloatingPanel.Control>
						<FloatingPanel.StageTrigger stage="minimized">
							<MinusIcon class="size-4" />
						</FloatingPanel.StageTrigger>
						<FloatingPanel.StageTrigger stage="maximized">
							<MaximizeIcon class="size-4" />
						</FloatingPanel.StageTrigger>
						<FloatingPanel.StageTrigger stage="default">
							<ArrowDownLeft class="size-4" />
						</FloatingPanel.StageTrigger>
						<FloatingPanel.CloseTrigger>
							<XIcon class="size-4" />
						</FloatingPanel.CloseTrigger>
					</FloatingPanel.Control>
				</FloatingPanel.Header>
				<FloatingPanel.Body>
					<p>This is a floating panel that can be dragged, resized, minimized, and maximized.</p>
					<p>Try dragging from the header or resizing from the bottom-right corner.</p>
				</FloatingPanel.Body>
				<FloatingPanel.ResizeTrigger axis="se" />
			</FloatingPanel.Content>
		</FloatingPanel.Positioner>
	</Portal>
</FloatingPanel>
